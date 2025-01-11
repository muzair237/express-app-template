import bcrypt from 'bcryptjs';

class Helpers {
  hashPassword(password) {
    const salt = bcrypt.genSaltSync(12);
    return bcrypt.hashSync(password, salt);
  }
}

export default Helpers;
