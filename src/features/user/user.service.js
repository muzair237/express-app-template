import { HttpStatus } from '../../utils/constants/httpStatus.js';
import { userModel } from '../../app.model.js';
import { helperService } from '../../serviceRegistery.js';

class UserService {
  constructor() {
    this.USER = userModel;
    this.helpers = helperService;
  }

  createUser = async (req, res) => {
    const { name, email, password } = req.body;

    const existingUser = await this.USER.findOne({ email });
    if (existingUser) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ success: false, message: `A user with the email '${email}' already exists` });
    }

    const hashPassword = this.helpers.hashPassword(password);

    await this.USER.create({ name, email, password: hashPassword });

    return res.status(HttpStatus.CREATED).json({ success: true, message: 'User created successfully!' });
  };

  getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await this.USER.findById(id).select('-password');
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({ success: false, message: `User with ID '${id}' not found` });
    }

    return res.status(HttpStatus.OK).json({ success: true, data: user });
  };

  updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await this.USER.findById(id);
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({ success: false, message: `User with ID '${id}' not found` });
    }

    if (name) user.name = name;
    if (email) {
      const existingUser = await this.USER.findOne({ email });
      if (existingUser && existingUser._id.toString() !== id) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ success: false, message: `A user with the email '${email}' already exists` });
      }
      user.email = email;
    }
    if (password) user.password = this.helpers.hashPassword(password);

    await user.save();

    return res.status(HttpStatus.OK).json({ success: true, message: 'User updated successfully!' });
  };

  deleteUser = async (req, res) => {
    const { id } = req.params;

    const user = await this.USER.findById(id);
    if (!user) {
      return res.status(HttpStatus.NOT_FOUND).json({ success: false, message: `User with ID '${id}' not found` });
    }

    await this.USER.findByIdAndDelete(id);

    return res.status(HttpStatus.OK).json({ success: true, message: 'User deleted successfully!' });
  };
}

export default UserService;
