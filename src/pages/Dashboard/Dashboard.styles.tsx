import styled from 'styled-components';

export const Dashboard = styled.div`
  padding: 15px;
  margin-top: 50px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px;
    margin-top: 100px;
  }
`;
