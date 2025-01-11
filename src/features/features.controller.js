import express from 'express';
import userController from './user/user.controller.js';

const router = express.Router();

router.use('/user', userController);

export default router;
