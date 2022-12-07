import express from 'express';
import { routes } from './router';

const app = express();
app.use(express.json());
app.use(routes);
export { app };