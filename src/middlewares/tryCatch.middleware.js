import { HttpStatus } from '../utils/constants/httpStatus.js';

export default function tryCatch(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch ({ message, status, response }) {
      console.error('Error: ', message);
      return res.status(status || HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, ...response });
    }

    return next();
  };
}
