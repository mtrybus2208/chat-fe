import { SnackbarTypesEnum } from '../../../types/shared/snackbar';
import errorIcon from '../../../shared/icons/snackbar/error.json';
import warningIcon from '../../../shared/icons/snackbar/warning.json';
import successIcon from '../../../shared/icons/snackbar/success.json';

export const snackbarIcons = {
  [SnackbarTypesEnum.ERROR]: errorIcon,
  [SnackbarTypesEnum.WARNING]: warningIcon,
  [SnackbarTypesEnum.SUCCESS]: successIcon,
};

export const snackbarColorMapper = {
  [SnackbarTypesEnum.ERROR]: '#cd5050',
  [SnackbarTypesEnum.WARNING]: '#FF6B00',
  [SnackbarTypesEnum.SUCCESS]: '#00B58B',
};

export const snackbarCloseTime = 4000;

export const snackbarTheme = {
  error: {
    color: snackbarColorMapper[SnackbarTypesEnum.ERROR],
  },
  success: {
    color: snackbarColorMapper[SnackbarTypesEnum.SUCCESS],
  },
  warning: {
    color: snackbarColorMapper[SnackbarTypesEnum.WARNING],
  },
};
