import router from '#Routes/index.js';
import cors from 'cors';
import express from 'express';

const expressApp = express();
expressApp.listen();

// TODO Middlewares
expressApp.use(express.json());
expressApp.use(cors());

// TODO Routes
expressApp.use('/api_v2', router);

export default expressApp;
