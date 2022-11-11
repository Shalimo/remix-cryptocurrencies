import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300&display=swap');
  body {
  background: #2B2B2B;
  background-repeat: repeat;
  font-family: 'Signika Negative', sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  }
`;
export default GlobalStyle;
