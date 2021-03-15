import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: radial-gradient(#0C0C1E,#1B2E3C) no-repeat;
    /* Centering the app */
    display: grid;
    justify-content: center;
    align-items: center;

    footer {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    position: absolute;
    color: #f3f3f2;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }

  .social-icons{
    position: fixed;
    bottom: 40%;
    left: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    a{
      text-decoration: none;
      color: #f3f3f3;
      font-size: 1.8rem;
      border-bottom: 1px solid #f3f3f3;
      transition: color .5s ease-in;
      &:hover{
        color: lightskyblue;
      }
    }
  }
}
`;

export default GlobalStyle;
