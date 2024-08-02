export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserGoogleLogin {
  email: string;
  name: string;
}
