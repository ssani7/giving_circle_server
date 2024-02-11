import express from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router
  .get('/', UserController.getAllUser)
  .post('/login', UserController.login)
  .post('/register', UserController.register);

export const UserRouter = router;
