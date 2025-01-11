import express from 'express';
import AppService from './app.service.js';
import AppControllers from './features/features.controller.js';

const router = express.Router();

router.get('/', AppService.getHello);
router.use('/api/v1', AppControllers);

export default router;
