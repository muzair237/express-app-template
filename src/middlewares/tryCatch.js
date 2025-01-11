import { HttpStatus } from '../utils/constants/httpStatus.js';

export default function tryCatch(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch ({ message }) {
      console.error('message:---------- ', message);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ success: false, message });
    }

    return next();
  };
}
