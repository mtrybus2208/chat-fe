import axios, { AxiosResponse } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import ErrorDetails from "../../../types/shared/http.types";
import {
  PasswordResetTokenActions,
  PasswordResetTokenTypes,
} from "./passwordResetToken.types";

const { REACT_APP_API: API } = process.env;

export const resetTokenAction = (): PasswordResetTokenActions => {
  return {
    type: PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN,
  };
};

export const resetTokenSuccessAction = (
  payload: any
): PasswordResetTokenActions => {
  return {
    type: PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS,
    payload,
  };
};

export const resetTokenFailureAction = (
  msg: string
): PasswordResetTokenActions => {
  return {
    type: PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_FAILURE,
    payload: { msg },
  };
};

export const validateResetToken = (
  token: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(resetTokenAction());

    try {
      const res: AxiosResponse<any> = await axios({
        method: "get",
        url: `${API}/users/validate-password-reset-token/${token}`,
      });
      dispatch(resetTokenSuccessAction(res.data));
    } catch (err) {
      const { msg }: ErrorDetails = err.response.data;
      dispatch(resetTokenFailureAction(msg));
    }
  };
};
