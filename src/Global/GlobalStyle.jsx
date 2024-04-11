import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
  p {
    font-family : "수트";
    
    @media screen and (min-width: 501px) {
      font-size : 20px;
    }
    @media screen and (max-width: 500px) {
      font-size : 14px;
    }
  }
  h1 {
    font-family : "수트";
    @media screen and (min-width: 501px) {
      font-size : 36px;
      font-weight : 600;
    }
    @media screen and (max-width: 500px) {
      font-size : 24px;
      font-weight : 600;
    }
  }

  h2 {
    font-family : "수트";
    @media screen and (min-width: 501px) {
      font-size : 36px;
      font-weight : 600;
    }
    @media screen and (max-width: 500px) {
      font-size : 20px;
      font-weight : 600;
    }
  }

  h3 {
    font-family : "수트";
    @media screen and (min-width: 501px) {
      font-size : 24px;
      font-weight : 400;
    }
    @media screen and (max-width: 500px) {
      font-size : 18px;
      font-weight : 400;
    }
  }
`;

export default GlobalStyle;