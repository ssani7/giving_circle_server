import { RequestHandler } from 'express';
import { UserServices } from './user.service';

export const register: RequestHandler = async (req, res, next) => {
  try {
    const { ...userData } = req.body;
    const result = await UserServices.register(userData);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await UserServices.login({ email, password });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  register,
  login,
};
