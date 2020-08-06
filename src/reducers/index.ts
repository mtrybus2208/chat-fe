import { combineReducers } from 'redux';

import { sharedRootReducer } from './shared/index';
import passwordResetTokenReducer from './passwordResetToken/passwordResetToken';

const rootReducer = combineReducers({
  ...sharedRootReducer,
  passwordResetToken: passwordResetTokenReducer,
});

export default rootReducer;
