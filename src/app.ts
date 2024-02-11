import cors from 'cors';
import express, { Application, Request, Response, urlencoded } from 'express';

import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { UserRouter } from './app/modules/auth/user/user.route';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Giving Circle');
});

app.use(globalErrorHandler);

app.use('/auth', UserRouter);

export default app;
