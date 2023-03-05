import horsesRouter from '#API/components/caballos/horses.routes.js';
import usersRouter from '#API/components/usuarios/users.routes.js';
import { Router } from 'express';

const router = Router();

router.get('/usuarios', usersRouter);
router.post('/login', usersRouter);

router.get('/equinos', horsesRouter);
router.get('/equinos/:id', horsesRouter);
router.post('/equinos/status', horsesRouter);
router.post('/equinos/place', horsesRouter);

export default router;
