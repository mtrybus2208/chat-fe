import { AuthActions, AuthTypes } from '../../actions/shared/auth/auth.types';
import { AuthState } from './auth.types';

const INITIAL_STATE: AuthState = {
  user: null,
  isPending: false,
};

export default (state = INITIAL_STATE, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthTypes.LOGIN_USER:
      return {
        ...state,
        isPending: true,
      };
    case AuthTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isPending: false,
        user: action.payload.user,
      };
    case AuthTypes.LOGIN_USER_FAILURE:
    case AuthTypes.LOGOUT_USER:
      return {
        ...state,
        isPending: false,
        user: null,
      };
    default:
      return state;
  }
};
