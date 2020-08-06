import React from 'react';
import Lottie, { Options } from 'react-lottie';

export interface IconLottieConfig {
  height: number;
  width: number;
}

export interface IconLottieProps {
  lottieOptions: Options;
  config?: IconLottieConfig;
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: null,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const IconLottie: React.FunctionComponent<IconLottieProps> = ({
  lottieOptions,
  config = {
    height: 35,
    width: 35,
  },
}) => {
  return (
    <Lottie
      options={{
        ...defaultOptions,
        ...lottieOptions,
      }}
      height={config.height}
      width={config.width}
    />
  );
};

export default IconLottie;
