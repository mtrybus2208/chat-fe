import React from 'react';
import Lottie from 'react-lottie';
import * as S from './Preloader.styles';
import animationData from './spinner.json';

export interface PreloaderProps {}

const Preloader: React.FunctionComponent<PreloaderProps> = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <S.Wrapper>
      <S.Preloader>
        <S.Content>
          <Lottie options={defaultOptions} height={170} width={170} />
          <S.Title>Loading</S.Title>
        </S.Content>
      </S.Preloader>
    </S.Wrapper>
  );
};

export default Preloader;
