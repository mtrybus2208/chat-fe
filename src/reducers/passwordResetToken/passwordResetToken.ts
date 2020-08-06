import {
  PasswordResetTokenActions,
  PasswordResetTokenTypes,
} from "../../actions/passwordReset/passwordResetToken/passwordResetToken.types";
import { PasswordResetTokenState } from "./passwordResetToken.types";

const INITIAL_STATE: PasswordResetTokenState = {
  isValid: true,
  isPending: false,
  errorMessage: "",
};

export default (
  state = INITIAL_STATE,
  action: PasswordResetTokenActions
): PasswordResetTokenState => {
  switch (action.type) {
    case PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN:
      return {
        ...state,
        isPending: true,
      };
    case PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_SUCCESS:
      return {
        ...state,
        isPending: false,
        isValid: true,
      };
    case PasswordResetTokenTypes.VALIDATE_PASSWORD_RESET_TOKEN_FAILURE:
      return {
        ...state,
        isPending: false,
        errorMessage: action.payload.msg,
      };
    default:
      return state;
  }
};
