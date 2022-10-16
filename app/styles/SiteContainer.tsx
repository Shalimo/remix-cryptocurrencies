import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: hsl(0, 0%, 100%);
  background-image: radial-gradient(
    circle,
    rgba(152, 111, 238, 1) 0%,
    rgba(118, 115, 181, 1) 35%,
    rgba(58, 13, 185, 1) 100%
  );
  font-family: "baloo";
  src: url("/fonts/baloo/baloo.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  }
`
export default GlobalStyle