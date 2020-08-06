const props = {
  base: {
    light: '#23272d',
    avatarBg: '#2e333b',
  },
  grey: {
    base: '#eee',
    semiBase: '#ccc',
    light: '#e6e5e5',
    semiDark: '#aaa',
    dark: '#383838',
  },
  red: {
    base: '#581a1a',
  },
  shadow: {
    base: 'rgba(0, 0, 0, .12) 0 1px 6px',
    dark: 'rgba(0, 0, 0, .2) 0 1px 6px',
  },
  purple: '#642773',
  white: '#fff',
  padding: {
    sm: 10,
    md: 20,
    lg: 50,
  },
  link: {
    bg: {
      active: `linear-gradient(
          to top,
          rgb(31, 37, 42),
          rgb(34, 40, 46) 50%,
          rgb(38, 45, 53) 76%,
          rgb(40, 48, 59));`,
      normal: 'transparent',
    },
  },
};

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 1920,
  desktopL: 2560,
};

const media = {
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  desktopL: `(min-width: ${sizes.desktopL}px)`,
};

const theme = {
  ...props,
  sizes: { ...sizes },
  media: { ...media },
  headerBg: '#363030',
  primary: '#141619',
  accent: props.purple,
  secondary: '#1b1e22',
  borderColor: props.grey.semiBase,
  baseFontColor: '#484747',
  darkFontColor: '#111315',
  success: '#1a3e24',
  error: props.red.base,
  white: props.white,
  borderRadius: {
    button: '25px',
  },
};

export default theme;
