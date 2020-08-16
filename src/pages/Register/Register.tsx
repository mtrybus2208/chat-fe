import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RegisterFormValues } from './Register.types';
import { AuthState } from '../../reducers/shared/auth.types';
import RegisterForm from './components/RegisterForm/RegisterForm';
import * as fromActions from '../../actions/shared/register/register';
import { useRedirectLoggedUser } from '../../shared/hooks/useRedirectLoggedUser';

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = props => {
  const dispatch = useDispatch();
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);

  useRedirectLoggedUser(auth);

  const handleSubmit = (
    values: RegisterFormValues,
    formikActions: FormikHelpers<RegisterFormValues>,
  ): void => {
    dispatch(fromActions.register(values));
  };

  return (
    <RegisterForm
      {...props}
      isPending={auth.isPending}
      onSubmit={handleSubmit}
    />
  );
};

export default Register;
