import { SnackbarTypesEnum } from './snackbar.enums';

export enum SnackbarTypes {
  SHOW_SNACKBAR = 'SHOW_SNACKBAR ',
  HIDE_SNACKBAR = 'HIDE_SNACKBAR',
}

export interface SnackbarOptions {
  type: SnackbarTypesEnum;
}

export interface ShowSnackbarPayload {
  options?: SnackbarOptions;
  msg: string;
}

export interface ShowSnackbarAction {
  type: typeof SnackbarTypes.SHOW_SNACKBAR;
  payload: ShowSnackbarPayload;
}

export interface HideSnackbarAction {
  type: typeof SnackbarTypes.HIDE_SNACKBAR;
}

export type SnackbarActions = ShowSnackbarAction | HideSnackbarAction;
