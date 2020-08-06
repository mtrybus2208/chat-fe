import * as Yup from 'yup';

import { EMAIL_REGEX } from '../../../helpers/regularExpressions';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('This field is required')
    .matches(EMAIL_REGEX, 'Email must have a valid format.'),
  password: Yup.string()
    .trim()
    .required('This field is required')
    .min(5, 'Password should be longer than 5 chars')
    .max(50, 'Password should be shorter than 50 chars'),
});
