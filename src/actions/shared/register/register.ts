import axios, { AxiosResponse } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import { RegisterFormValues } from '../../../pages/Register/Register.types';
import { User } from '../../../reducers/shared/auth.types';
import ErrorDetails from '../../../types/shared/http.types';
import { showSnackbar } from '../snackbar/snackbar';
import { SnackbarTypesEnum } from '../../../types/shared/snackbar';

import { RegisterActions, RegisterTypes } from './register.types';

const { REACT_APP_HOST: HOST } = process.env;

export const registerAction = (): RegisterActions => {
  return {
    type: RegisterTypes.REGISTER_USER,
  };
};

export const registerSuccessAction = (user: User): RegisterActions => {
  return {
    type: RegisterTypes.REGISTER_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const registerFailureAction = (msg: string): RegisterActions => {
  return {
    type: RegisterTypes.REGISTER_USER_FAILURE,
    payload: {
      msg,
    },
  };
};

export const register = (
  data: RegisterFormValues,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(registerAction());

    try {
      const res: AxiosResponse<User> = await axios({
        method: 'post',
        url: `${HOST}/users`,
        data,
      });
      dispatch(registerSuccessAction(res.data));
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
      dispatch(registerFailureAction(msg));
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
