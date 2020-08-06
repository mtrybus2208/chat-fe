import authReducer from './auth';
import snackbarReducer from './snackbar/snackbar';

const sharedRootReducer = {
  auth: authReducer,
  snackbar: snackbarReducer,
};

export { sharedRootReducer };
