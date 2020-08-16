import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { LoginFormValues } from '../../../pages/Login/Login.types';
import { User } from '../../../reducers/shared/auth.types';
import ErrorDetails from '../../../types/shared/http.types';
import { AuthActions, AuthTypes } from './auth.types';
import { showSnackbar } from '../snackbar/snackbar';
import { SnackbarTypesEnum } from '../../../types/shared/snackbar';

const { REACT_APP_COMMENTS_SYSTEM_HOST: API } = process.env;

export const logoutAction = (): AuthActions => {
  return {
    type: AuthTypes.LOGOUT_USER,
  };
};

export const loginAction = (): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER,
  };
};

export const loginSuccessAction = (user: User): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailureAction = (msg: string): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER_FAILURE,
    payload: {
      msg,
    },
  };
};

export const login = (
  credentials: LoginFormValues,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(loginAction());

    try {
      const res: AxiosResponse<User> = await axios({
        method: 'post',
        url: `${API}/login`,
        data: credentials,
      });
      dispatch(loginSuccessAction(res.data));
      dispatch(
        showSnackbar({
          options: {
            type: SnackbarTypesEnum.SUCCESS,
          },
          msg: 'Welcome, you have been successfully logged in',
        }),
      );
    } catch (err) {
      const { msg }: ErrorDetails = err.response.data;
      dispatch(loginFailureAction(msg));
      dispatch(
        showSnackbar({
          options: {
            type: SnackbarTypesEnum.ERROR,
          },
          msg,
        }),
      );
    }
  };
};
