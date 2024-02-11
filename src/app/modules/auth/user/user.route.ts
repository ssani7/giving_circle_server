import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router
  .get('/', (req, res) => {
    res.send('hi');
  })
  .post('/login', UserController.login)
  .post('/register', UserController.register);

export const UserRouter = router;
