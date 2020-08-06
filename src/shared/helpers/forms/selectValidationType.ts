import { InputValidationTypes } from "../../../types/shared/forms.types";

export interface SelectValidationType {
  validationType?: InputValidationTypes;
  touched?: boolean;
  error?: string;
}

export const selectValidationType = ({
  validationType,
  touched,
  error,
}: SelectValidationType): boolean | undefined | string => {
  if (validationType === InputValidationTypes.ON_TOUCH) {
    return !!(error && touched);
  }
  return Boolean(error);
};
