import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  color: hsl(0, 0%, 100%);
  background: -webkit-linear-gradient(45deg, rgb(123, 124, 124), rgb(64, 64, 64));
  background: -moz-linear-gradient(45deg, rgb(123, 124, 124), rgb(64, 64, 64));
  background: linear-gradient(45deg, rgb(123, 124, 124), rgb(64, 64, 64));
  font-family: "baloo";
  src: url("/fonts/baloo/baloo.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  }
`;
export default GlobalStyle;
