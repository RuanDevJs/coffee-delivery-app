/* User */
export interface IAuthenticatedUser {
  uid: string;
  name: string;
  email: string;
}

/* Authentication and Register Methods */
export interface IRegisterUserWithEmailAndPasswordProps {
  name: string;
  email: string;
  password: string;
}

export interface IAuthWithEmailAndPassword {
  email: string;
  password: string;
}

export interface IUserContext {
  authenticatedUser: IAuthenticatedUser | null;
  loadingUser: boolean;
  registerUserWithEmailAndPassword: (
    payload: IRegisterUserWithEmailAndPasswordProps
  ) => Promise<void>;
  authWithEmailAndPassword: (
    payload: IAuthWithEmailAndPassword
  ) => Promise<void>;
}
