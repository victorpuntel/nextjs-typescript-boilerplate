import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 20px;
    color: ${props => props.theme.colors.text};
    text-align: center;
  }
`;
