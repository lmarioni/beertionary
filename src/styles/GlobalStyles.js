import { createGlobalStyle } from "styled-components";
const hola = "asd";

export const GlobalStyle = createGlobalStyle`
  /* #app {
    box-shadow: 0010pxrgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  } */
html {
  background: #343a40;
}
  body{
    background-color: transparent;
    color: #F5F6F7;
  }

  .card-img-listado{
    margin-left: auto;
    margin-right: auto;
    max-height: 200px;
    width: auto;
  }

.spin {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

`;
