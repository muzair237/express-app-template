import { HttpStatus } from '../utils/constants/httpStatus.js';

const validateBody = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: error.details.map(err => err.message),
      });
    }

    return next();
  };
};

export default validateBody;
