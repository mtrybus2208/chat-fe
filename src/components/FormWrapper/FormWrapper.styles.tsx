import React from 'react';
import styled from 'styled-components';

export const FormWrapper: React.FunctionComponent = styled.div`
  background-color: #1b1e22;
  margin: 50px auto;
  max-width: 700px;
  width: 100%;
  flex: 1 1 100%;
`;

export const Body = styled.div`
  padding: 60px 25px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 60px 80px;
  }
`;

export const Top = styled.div`
  box-shadow: 0 17px 24px 0 rgba(0, 0, 0, 0.17),
    inset -1px 1.7px 0 0 rgba(255, 255, 255, 0.017);
  background-color: #20252b;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1.2;
`;
