import { Router } from 'express';
import controllers from './horses.controllers.js';

const router = Router();

router.get('/equinos', controllers.getAllHorses);
router.get('/equinos/:id', controllers.getHorseById);
router.post('/equinos/status', controllers.getHorsesByStatus);
router.post('/equinos/place', controllers.getHorsesByPlace);

export default router;
