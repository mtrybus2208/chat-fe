import styled, { css } from 'styled-components';

export const Header = styled.div`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  background: #121315;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 20px 25px;
    flex-direction: row;
  }
`;

export const Column = styled.div`
  flex: 1;
`;
