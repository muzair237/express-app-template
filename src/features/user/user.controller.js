import express from 'express';
import { userService } from '../../serviceRegistery.js';
import validateBody from '../../middlewares/validate.js';
import tryCatch from '../../middlewares/tryCatch.js';
import createUserValidator from './validators/createUser.validator.js';
import updateUserValidator from './validators/updateUser.validator.js';

const router = express.Router();

router.post('/create-user', validateBody(createUserValidator), tryCatch(userService.createUser));

router.get('/get-user/:id', tryCatch(userService.getUserById));

router.patch('/update-user/:id', validateBody(updateUserValidator), tryCatch(userService.updateUser));

router.delete('/delete-user/:id', tryCatch(userService.deleteUser));

export default router;
