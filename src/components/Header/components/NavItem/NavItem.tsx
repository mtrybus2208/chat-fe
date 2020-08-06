import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavbarElements } from '../../../../shared/helpers/constants/navbarConstants';
import * as S from './NavItem.styles';

export interface NavItemProps extends NavbarElements {}

const NavItem: React.FunctionComponent<NavItemProps> = ({
  id,
  path,
  label,
  access,
}) => {
  return (
    <S.NavItem>
      <NavLink exact id={id} to={path}>
        {label}
      </NavLink>
    </S.NavItem>
  );
};

export default NavItem;
