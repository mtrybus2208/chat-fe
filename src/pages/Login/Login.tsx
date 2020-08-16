import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FormikHelpers } from 'formik';
import LoginForm from './components/LoginForm/LoginForm';
import { LoginFormValues } from './Login.types';
import { AuthState } from '../../reducers/shared/auth.types';
import * as fromActions from '../../actions/shared/auth/auth';

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);

  useEffect(() => {
    auth.user && history.push('/dashboard');
  }, [auth]);

  const handleSubmit = (
    values: LoginFormValues,
    formikActions: FormikHelpers<LoginFormValues>,
  ): void => {
    dispatch(fromActions.login(values));
  };

  return (
    <LoginForm {...props} isPending={auth.isPending} onSubmit={handleSubmit} />
  );
};

export default Login;
