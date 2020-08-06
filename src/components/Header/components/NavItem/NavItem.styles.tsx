import styled from 'styled-components';

export const NavItem = styled.div`
  &:not(:first-of-type) {
    margin-left: 10px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-left: auto;
  }
`;
