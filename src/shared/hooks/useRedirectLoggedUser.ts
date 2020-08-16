import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthState } from '../../reducers/shared/auth.types';

const useRedirectLoggedUser = (auth: AuthState): void => {
  const history = useHistory();

  useEffect(() => {
    auth.user && history.push('/dashboard');
  }, [auth]);
};

export { useRedirectLoggedUser };
