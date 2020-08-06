import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  ::selection{
    background: ${theme.accent};
  }

  img::selection{
    background: transparent;
  }
 
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: #747a81;
    background: #141619; 
    box-sizing: border-box;
    -webkit-tap-highlight-color: ${theme.accent};
    background-image: url('https://res.cloudinary.com/dfmqgkkbx/image/upload/v1586548141/galaxy_flat_design_bg2.png');
    min-height: 100vh;
    display: grid;
  }
`;

export default GlobalStyle;
