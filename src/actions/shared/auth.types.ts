import { User } from '../../reducers/shared/auth.types';

export enum AuthTypes {
  LOGOUT_USER = 'LOGOUT_USER',
  LOGIN_USER = 'LOGIN_USER',
  LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE',
}

export interface LogoutAction {
  type: typeof AuthTypes.LOGOUT_USER;
}

export interface LoginAction {
  type: typeof AuthTypes.LOGIN_USER;
}

export interface LoginSuccessAction {
  type: typeof AuthTypes.LOGIN_USER_SUCCESS;
  payload: {
    user: User;
  };
}

export interface LoginAFailureAction {
  type: typeof AuthTypes.LOGIN_USER_FAILURE;
  payload: {
    msg: string;
  };
}

export type AuthActions =
  | LogoutAction
  | LoginAction
  | LoginSuccessAction
  | LoginAFailureAction;
