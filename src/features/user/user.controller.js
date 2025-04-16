import express from 'express';
import { userService } from '../../serviceRegistery.js';
import { tryCatch, validateBody } from '../../middlewares/index.js';
import { createUserValidator, updateUserValidator } from './validators/index.js';

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
    const result = await userService.getUserById(req.params.id);
    res.status(200).json({ success: true, ...result });
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
