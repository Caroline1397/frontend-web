import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap');

  * {
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    min-height: 100%;
  }
  #root{
   display: flex;
   justify-content: center;
   align-items: center;
  }
  body {
    background: #fbd4c5;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #eee;
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
