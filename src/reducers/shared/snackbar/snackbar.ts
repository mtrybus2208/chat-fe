import {
  SnackbarActions,
  SnackbarTypes,
  SnackbarState,
} from '../../../types/shared/snackbar';

const INITIAL_STATE: SnackbarState = {
  opened: false,
  options: {
    type: null,
  },
  msg: '',
};

export default (
  state = INITIAL_STATE,
  action: SnackbarActions,
): SnackbarState => {
  switch (action.type) {
    case SnackbarTypes.SHOW_SNACKBAR:
      return {
        ...state,
        opened: true,
        msg: action.payload.msg,
        options: action.payload.options,
      };
    case SnackbarTypes.HIDE_SNACKBAR:
      return {
        ...state,
        opened: false,
      };

    default:
      return state;
  }
};
