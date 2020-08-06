import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  ChangePasswordUsingTokenActions,
  ChangePasswordUsingTokenTypes,
} from './changePasswordUsingToken.types';
import ErrorDetails from '../../../types/shared/http.types';

const { REACT_APP_API: API } = process.env;

export const changePasswordUsingTokenAction = (): ChangePasswordUsingTokenActions => {
  return {
    type: ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN,
  };
};

export const changePasswordUsingTokenSuccessAction = (
  payload: any,
): ChangePasswordUsingTokenActions => {
  return {
    type: ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN_SUCCESS,
    payload,
  };
};

export const changePasswordUsingTokenFailureAction = (
  msg: string,
): ChangePasswordUsingTokenActions => {
  return {
    type: ChangePasswordUsingTokenTypes.CHANGE_PASSWORD_USING_TOKEN_FAILURE,
    payload: { msg },
  };
};

export const changePasswordUsingToken = (
  token: string,
  newPassword: string,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(changePasswordUsingTokenAction());

    try {
      const res: AxiosResponse<any> = await axios({
        method: 'post',
        url: `${API}/users/change-password/${token}`,
        data: {
          newPassword,
        },
      });
      dispatch(changePasswordUsingTokenSuccessAction(res.data));
    } catch (err) {
      const { msg }: ErrorDetails = err.response.data;
      dispatch(changePasswordUsingTokenFailureAction(msg));
    }
  };
};
