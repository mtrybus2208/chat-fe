import styled from 'styled-components';
import { rgba } from 'polished';

import { SnackbarTypesEnum } from '../../types/shared/snackbar';
import { snackbarColorMapper } from '../../shared/helpers/constants/snackbarConstants';

interface StyledContainerProps {
  type: SnackbarTypesEnum;
}

const width = 700;
export const Container = styled.div<StyledContainerProps>`
  z-index: 1002;
  width: ${width}px;
  position: fixed;
  flex-direction: column;
  bottom: 10px;
  left: calc(50vw - ${width / 2}px);
  display: flex;
  align-items: center;
  color: ${({ type }) => snackbarColorMapper[type]};
  background-color: rgba(0, 0, 0, 0.1);
  word-break: break-word;
  animation: linear appear 300ms;
  box-shadow: 0 17px 24px 0 rgba(0, 0, 0, 0.17),
    inset -1px 1.7px 0 0 rgba(255, 255, 255, 0.017);
  border: 1px solid ${({ type }) => rgba(snackbarColorMapper[type], 0.2)};
  min-height: 65px;
  justify-content: space-between;

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.span`
  margin: 0 10px;
  padding: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  :hover {
    cursor: normal;
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Close = styled.img`
  width: 13px;
  height: 13px;
`;

export const IconRow = styled.div`
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseRow = styled(IconRow)`
  padding: 15px;
  justify-content: flex-end;
  align-items: flex-start;
  cursor: pointer;
  margin-left: auto;
  min-width: 30px;
`;

export const Snackbar = styled.div`
  display: flex;
  width: 100%;
`;
