export type IUser = {
  name: string;
  email: string;
  password: string;
  role: string;
};

export type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};
