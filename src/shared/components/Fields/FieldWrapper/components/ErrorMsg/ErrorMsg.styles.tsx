import styled from "styled-components";

interface ErrorMsg {
  show?: boolean;
}

export const ErrorMsg = styled.div<ErrorMsg>`
  grid-area: error;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

export const Content = styled.div`
  padding: 5px;
  border-bottom: 1px solid #7f1515;
  font-size: 15px;
  color: #7f1515;
  justify-content: flex-start;
`;

export const Msg = styled.span`
  justify-content: center;
  align-items: center;
`;
