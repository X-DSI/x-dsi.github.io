import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans JP", sans-serif;
  -webkit-tap-highlight-color: transparent;
  /* background: yellow; */
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0px;
}

*::-webkit-scrollbar-track {
  background: black;
}

*::-webkit-scrollbar-thumb {
  background-color: lightgray;
  border-radius: 100px;
  /* border: 3px solid orange; */
}

html {
    --background-color: #fff;
}
`;
export default GlobalStyles;
