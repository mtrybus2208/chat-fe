import * as Yup from 'yup';

import { UserGender } from '../../../../pages/Register/Register.types';
import { message } from '../../constants/register/registerValidationConstants';

export const registerValidationSchema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .required(message.INVALID_USER_NAME_REQUIRED)
    .min(4, message.INVALID_USER_NAME_MIN)
    .max(20, message.INVALID_USER_NAME_MAX),
  gender: Yup.string().oneOf([UserGender.MALE, UserGender.FEMALE]),
  age: Yup.number()
    .typeError(message.INVALID_USER_AGE_TYPE)
    .integer(message.INVALID_USER_AGE_TYPE)
    .required(message.INVALID_USER_AGE_REQUIRED),
});
