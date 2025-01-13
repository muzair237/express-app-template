import express from 'express';
import { userService } from '../../serviceRegistery.js';
import validateBody from '../../middlewares/validate.js';
import tryCatch from '../../middlewares/tryCatch.js';
import createUserValidator from './validators/createUser.validator.js';
import updateUserValidator from './validators/updateUser.validator.js';

const router = express.Router();

router.post(
  '/create-user',
  validateBody(createUserValidator),
  tryCatch(async (req, res) => {
    const result = await userService.createUser(req.body);
    res.status(201).json({ success: true, ...result });
  }),
);

router.get(
  '/get-user/:id',
  tryCatch(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, data: user });
  }),
);

router.patch(
  '/update-user/:id',
  validateBody(updateUserValidator),
  tryCatch(async (req, res) => {
    const result = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({ success: true, ...result });
  }),
);

router.delete(
  '/delete-user/:id',
  tryCatch(async (req, res) => {
    const result = await userService.deleteUser(req.params.id);
    res.status(200).json({ success: true, ...result });
  }),
);

export default router;
