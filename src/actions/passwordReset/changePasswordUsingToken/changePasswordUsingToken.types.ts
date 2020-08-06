export enum ChangePasswordUsingTokenTypes {
  CHANGE_PASSWORD_USING_TOKEN = 'CHANGE_PASSWORD_USING_TOKEN',
  CHANGE_PASSWORD_USING_TOKEN_SUCCESS = 'CHANGE_PASSWORD_USING_TOKEN_SUCCESS',
  CHANGE_PASSWORD_USING_TOKEN_FAILURE = 'CHANGE_PASSWORD_USING_TOKEN_FAILURE',
}

export interface ChangePasswordUsingTokenAction {
  type: typeof ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN;
}

export interface ChangePasswordUsingTokenSuccessAction {
  type: typeof ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN_SUCCESS;
  payload: any; //need to set properly type
}

export interface ChangePasswordUsingTokenFailureAction {
  type: typeof ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN_FAILURE;
  payload: {
    msg: string;
  };
}

export type ChangePasswordUsingTokenActions =
  | ChangePasswordUsingTokenAction
  | ChangePasswordUsingTokenSuccessAction
  | ChangePasswordUsingTokenFailureAction;
