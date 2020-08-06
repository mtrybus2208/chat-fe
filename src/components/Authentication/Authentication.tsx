import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { AuthState } from '../../reducers/shared/auth.types';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Chat from '../../pages/Chat/Chat';
import Header from '../../components/Header/Header';

export interface AuthenticationProps {}

const Authentication: React.FunctionComponent<AuthenticationProps> = () => {
  const auth: AuthState = useSelector(({ auth }: { auth: AuthState }) => auth);
  return auth.user ? (
    <>
      <Header />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/chat" component={Chat} />
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Authentication;
