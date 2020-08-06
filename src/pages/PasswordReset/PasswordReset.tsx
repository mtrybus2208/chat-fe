import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';
import { PasswordResetFormValues } from './PasswordReset.types';
import { validateResetToken } from '../../actions/passwordReset/passwordResetToken/passwordResetToken';
import { changePasswordUsingToken } from '../../actions/passwordReset/changePasswordUsingToken/changePasswordUsingToken';
import { PasswordResetTokenState } from '../../reducers/passwordResetToken/passwordResetToken.types';

type Params = { token: string };

export interface PasswordResetProps {}

const PasswordReset: React.FunctionComponent<PasswordResetProps> = ({
  match,
}: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const passwordResetToken: PasswordResetTokenState = useSelector(
    ({ passwordResetToken }: { passwordResetToken: PasswordResetTokenState }) =>
      passwordResetToken,
  );
  const { isValid, isPending } = passwordResetToken;

  useEffect(() => {
    const { token }: { token: string } = match.params;
    dispatch(validateResetToken(token));
  }, []);

  const handleSubmit = async (
    values: PasswordResetFormValues,
    actions: FormikHelpers<PasswordResetFormValues>,
  ) => {
    try {
      const { token }: { token: string } = match.params;
      await dispatch(changePasswordUsingToken(token, values.newPassword));
      history.push('/');
    } catch (e) {
      console.log('show error snackbar');
    }
  };

  if (isPending) {
    return <p>Loading...</p>;
  }

  return isValid ? (
    <PasswordResetForm onSubmit={handleSubmit} />
  ) : (
    <p>Token Not valid</p>
  );
};

export default PasswordReset;
