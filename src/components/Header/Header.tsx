import React from 'react';

import Navigation from './components/Navigation/Navigation';
import * as S from './Header.styles';

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <S.Header>
      <S.Column>Logo</S.Column>
      <S.Column>
        <Navigation />
      </S.Column>
    </S.Header>
  );
};

export default Header;
