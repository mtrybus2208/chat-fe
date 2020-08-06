import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import theme from '../../theme/theme';
import { useWindowWidth } from '../../shared/hooks/useWindowWidth';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';
import * as S from './Chat.styles';

export interface ChatProps {}

const Chat: React.FunctionComponent<ChatProps> = () => {
  const windowWidth = useWindowWidth();

  const isTablet = windowWidth <= theme.sizes.tablet;

  console.log({ isTablet });

  return isTablet ? (
    <Switch>
      <Route exact path="/chat/users" component={Users} />
      <Redirect from="/chat" to="/chat/users" />
      <Redirect from="/chat/dashboard" to="/chat/users" />
    </Switch>
  ) : (
    <Switch>
      <Route exact path="/chat/dashboard" component={Dashboard} />
      <Redirect from="/" to="/chat/dashboard" />
      <Redirect from="/chat/users" to="/chat/dashboard" />
    </Switch>
  );
};

export default Chat;
