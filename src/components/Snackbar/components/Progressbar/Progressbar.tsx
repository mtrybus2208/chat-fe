import React from 'react';
import styled from 'styled-components';
import { Progress } from 'react-sweet-progress';

import { SnackbarTypesEnum } from '../../../../types/shared/snackbar';
import { snackbarTheme } from '../../../../shared/helpers/constants/snackbarConstants';
import * as S from './Progressbar.styles';

export interface ProgressbarProps {
  percentage: number;
  status: SnackbarTypesEnum;
}

const Progressbar: React.FunctionComponent<ProgressbarProps> = ({
  percentage,
  status,
}) => {
  const StyledProgress = styled(Progress)`
    .react-sweet-progress-line-inner {
      position: relative;
      min-height: 1px;
      border-radius: 100px;
      transition: width 0.3s ease;
    }
    .react-sweet-progress-symbol {
      display: none;
    }
  `;

  return (
    <S.ProgressWrapper>
      <StyledProgress
        percent={percentage}
        status={status}
        theme={snackbarTheme}
      />
    </S.ProgressWrapper>
  );
};

export default Progressbar;
