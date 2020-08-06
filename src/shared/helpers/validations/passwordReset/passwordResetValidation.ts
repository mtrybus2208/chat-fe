import * as Yup from 'yup';

export const passwordResetValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .required('This field is required')
    .min(5, 'Password should be longer than 5 chars')
    .max(50, 'Password should be shorter than 50 chars'),
  newPasswordRepeat: Yup.string().when('newPassword', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string()
      .required('This field is required')
      .oneOf([Yup.ref('newPassword')], 'Both password need to be the same'),
  }),
});
