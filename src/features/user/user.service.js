import { userModel } from '../features.model.js';
import { HttpStatus } from '../../utils/constants/httpStatus.js';
import HttpException from '../../utils/errorHandler.js';

class UserService {
  constructor() {
    this.USER = userModel;
  }

  injectDependencies({ helperService }) {
    this.helpers = helperService;
  }

  async createUser({ name, email, password }) {
    const existingUser = await this.USER.findOne({ email });
    if (existingUser) {
      throw new HttpException({ message: `A user with the email '${email}' already exists` }, HttpStatus.CONFLICT);
    }

    const hashPassword = this.helpers.hashPassword(password);
    await this.USER.create({ name, email, password: hashPassword });

    return { message: 'User created successfully!' };
  }

  async getUserById(id) {
    const user = await this.USER.findById(id).select('-password');
    if (!user) {
      throw new HttpException({ message: `User with ID '${id}' not found` }, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async updateUser(id, updates) {
    const { name, email, password } = updates;
    const user = await this.USER.findById(id);
    if (!user) {
      throw new HttpException({ message: `User with ID '${id}' not found` }, HttpStatus.NOT_FOUND);
    }

    if (email) {
      const existingUser = await this.USER.findOne({ email });
      if (existingUser && existingUser._id.toString() !== id) {
        throw new HttpException({ message: `A user with the email '${email}' already exists` }, HttpStatus.CONFLICT);
      }
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = this.helpers.hashPassword(password);

    await user.save();
    return { message: 'User updated successfully!' };
  }

  async deleteUser(id) {
    const user = await this.USER.findById(id);
    if (!user) {
      throw new HttpException({ message: `User with ID '${id}' not found` }, HttpStatus.NOT_FOUND);
    }
    await this.USER.findByIdAndDelete(id);

    return { message: 'User deleted successfully!' };
  }
}

export default UserService;
