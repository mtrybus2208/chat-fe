export enum PasswordResetTokenTypes {
  VALIDATE_PASSWORD_RESET_TOKEN = 'VALIDATE_PASSWORD_RESET_TOKEN',
  VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS = 'VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS',
  VALIDATE_PASSWORD_RESET_TOKEN_FAILURE = 'VALIDATE_PASSWORD_RESET_TOKEN_FAILURE',
}

export interface ResetTokenAction {
  type: typeof PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN;
}

export interface ResetTokenSuccessAction {
  type: typeof PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS;
  payload: any; //need to set properly type
}

export interface ResetTokenFailureAction {
  type: typeof PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_FAILURE;
  payload: {
    msg: string;
  };
}

export type PasswordResetTokenActions =
  | ResetTokenAction
  | ResetTokenSuccessAction
  | ResetTokenFailureAction;
