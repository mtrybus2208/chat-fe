import { SnackbarOptions } from './snackbar.actions.types';

export interface SnackbarState {
  opened: boolean;
  options?: SnackbarOptions;
  msg: string;
}
