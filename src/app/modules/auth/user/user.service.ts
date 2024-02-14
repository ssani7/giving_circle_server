import config from '../../../../config';
import { LoginData, RegisterData } from './user.interface';
import { User } from './usr.model';
import jwt from 'jsonwebtoken';

export const register = async (userdata: RegisterData) => {
  const existing = await User.findOne({ email: userdata.email });

  if (existing)
    throw new Error('User already exists for email: ' + userdata.email);

  const user = await User.create(userdata);

  const token = jwt.sign(user.toJSON(), config.jwt_token as string, {
    expiresIn: '1D',
  });

  return { user, token };
};

export const login = async (userdata: LoginData) => {
  const user = await User.findOne({ email: userdata.email });
  console.log('🚀 ~ login ~ user:', user);

  if (!user) throw new Error('No user found for : ' + userdata.email);

  const token = jwt.sign(user.toJSON(), config.jwt_token as string, {
    expiresIn: '1D',
  });

  return { user, token };
};

export const UserServices = {
  register,
  login,
};
