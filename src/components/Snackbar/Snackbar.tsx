import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SnackbarState } from '../../types/shared/snackbar';
import IconLottie from '../IconLottie/IconLottie';
import { percentage } from '../../utils/calculation/percentage';
import { useInterval } from '../../shared/hooks/useInterval';
import Progressbar from './components/Progressbar/Progressbar';
import {
  snackbarIcons,
  snackbarCloseTime,
} from '../../shared/helpers/constants/snackbarConstants';
import * as fromActions from '../../actions/shared/snackbar/snackbar';
import * as S from './Snackbar.styles';

export interface SnackbarProps {
  closeTime?: number;
}

const Snackbar: React.FunctionComponent<SnackbarProps> = ({
  closeTime = snackbarCloseTime,
}) => {
  const dispatch = useDispatch();
  const snackbar: SnackbarState = useSelector(
    ({ snackbar }: { snackbar: SnackbarState }) => snackbar,
  );

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useInterval(() => {
    if (seconds <= closeTime && isActive) {
      return setSeconds(seconds => seconds + 10);
    }
  }, 10);

  useEffect(() => {
    if (snackbar.opened) {
      setSeconds(0);
      setIsActive(true);
    }
  }, [snackbar]);

  useEffect(() => {
    if (seconds >= closeTime && isActive) {
      handleClose();
    }
  }, [seconds]);

  const handleClose = () => {
    setIsActive(false);
    dispatch(fromActions.hideSnackbar());
  };

  const handleMouseEnter = () => setIsActive(false);

  const handleMouseLeave = () => setIsActive(true);

  return (
    !!snackbar.opened && (
      <S.Container type={snackbar.options.type}>
        <S.Snackbar
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <S.IconRow>
            <IconLottie
              lottieOptions={{
                animationData: snackbarIcons[snackbar.options.type],
                loop: false,
              }}
            />
          </S.IconRow>
          <S.Text>{snackbar.msg}</S.Text>
          <S.CloseRow>
            <S.Close
              onClick={handleClose}
              src="https://res.cloudinary.com/dfmqgkkbx/image/upload/v1586771890/close.svg"
            />
          </S.CloseRow>
        </S.Snackbar>
        <Progressbar
          percentage={100 - percentage(seconds, closeTime)}
          status={snackbar.options.type}
        />
      </S.Container>
    )
  );
};

export default Snackbar;
