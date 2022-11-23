import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  body {
    color: ${({ theme }) => theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.background.main};
    font-family: 'Poppins', sans-serif;

  }

  html {
    overflow: auto;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
