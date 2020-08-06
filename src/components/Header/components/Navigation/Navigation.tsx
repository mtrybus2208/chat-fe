import React from 'react';

import NavItem from '../NavItem/NavItem';
import { navbarElements } from '../../../../shared/helpers/constants/navbarConstants';
import * as S from './Navigation.styles';

export interface NavigationProps {}

const Navigation: React.FunctionComponent<NavigationProps> = () => {
  return (
    <S.Navigation>
      {navbarElements.map(item => (
        <NavItem {...item} />
      ))}
    </S.Navigation>
  );
};

export default Navigation;
