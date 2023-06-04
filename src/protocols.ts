export type ApplicationError = {
  name: string;
  message: string;
};

export type SignUp = {
  name: string;
  email: string;
  password: string;
};
export type SignIn = {
  email: string;
  password: string;
};

export type RequestError = {
  status: number;
  data: object | null;
  statusText: string;
  name: string;
  message: string;
};
