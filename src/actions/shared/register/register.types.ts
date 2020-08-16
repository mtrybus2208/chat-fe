import { User } from '../../../reducers/shared/auth.types';

export enum RegisterTypes {
  REGISTER_USER = 'REGISTER_USER',
  REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE',
}

export interface RegisterAction {
  type: typeof RegisterTypes.REGISTER_USER;
}

export interface RegisterSuccessAction {
  type: typeof RegisterTypes.REGISTER_USER_SUCCESS;
  payload: {
    user: User;
  };
}

export interface RegisterAFailureAction {
  type: typeof RegisterTypes.REGISTER_USER_FAILURE;
  payload: {
    msg: string;
  };
}

export type RegisterActions =
  | RegisterAction
  | RegisterSuccessAction
  | RegisterAFailureAction;
