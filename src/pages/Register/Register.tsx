import React, { useEffect } from 'react';
import { FormikHelpers } from 'formik';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { RegisterFormValues } from './Register.types';
import { AuthState } from '../../reducers/shared/auth.types';
import RegisterForm from './components/RegisterForm/RegisterForm';
import * as fromActions from '../../actions/shared/register/register';

export interface RegisterProps {}

const Register: React.FunctionComponent<RegisterProps> = props => {
  const handleSubmit = (
    values: RegisterFormValues,
    formikActions: FormikHelpers<RegisterFormValues>,
  ): void => {
    dispatch(fromActions.register(values));
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);

  useEffect(() => {
    auth.user && history.push('/dashboard');
  }, [auth]);

  return (
    <RegisterForm
      {...props}
      isPending={auth.isPending}
      onSubmit={handleSubmit}
    />
  );
};

export default Register;
