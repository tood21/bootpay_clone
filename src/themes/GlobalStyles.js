import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  html, body {
    overflow-x: hidden;

  }
  
  html {
    @media screen and (max-width: 900px) {
      font-size: 13px;
    }
  }
  
  
  body{
    font-family: "spoqa Han Sans", sans-serif;
  }
  
  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }

  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles;