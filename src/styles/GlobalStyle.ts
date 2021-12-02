import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

  body {
    height: 100vh;
    width: 100vw;
    color: ${props => props.theme.colors.text};
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: 18px;
  }
`