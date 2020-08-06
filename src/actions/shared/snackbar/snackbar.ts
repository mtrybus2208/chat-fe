import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  ShowSnackbarAction,
  HideSnackbarAction,
  ShowSnackbarPayload,
  SnackbarTypes,
} from '../../../types/shared/snackbar';

export const showSnackbarAction = (
  payload: ShowSnackbarPayload,
): ShowSnackbarAction => {
  return {
    type: SnackbarTypes.SHOW_SNACKBAR,
    payload,
  };
};

export const hideSnackbarAction = (): HideSnackbarAction => {
  return {
    type: SnackbarTypes.HIDE_SNACKBAR,
  };
};

export const showSnackbar = (
  payload: ShowSnackbarPayload,
): ThunkAction<
  ShowSnackbarAction, // The type of the last action to be dispatched - will always be promise<T> for async actions
  ShowSnackbarPayload, // The type for the data within the last action
  null, // The type of the parameter for the nested function
  AnyAction // The type of the last action to be dispatched
> => dispatch => dispatch(showSnackbarAction(payload));

export const hideSnackbar = (): ThunkAction<
  HideSnackbarAction,
  {},
  null,
  AnyAction
> => dispatch => dispatch(hideSnackbarAction());
