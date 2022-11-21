import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: hsl(246, 80%, 60%);
    --light-red-work: hsl(15, 100%, 70%);
    --soft-blue: hsl(195, 74%, 62%);
    --light-red: hsl(348, 100%, 68%);
    --lime-green: hsl(145, 58%, 55%);
    --violet: hsl(264, 64%, 52%);
    --soft-orange: hsl(43, 84%, 65%);

    --very-dark-blue: hsl(226, 43%, 10%);
    --dark-blue: hsl(235, 46%, 20%);
    --desaturated-blue: hsl(235, 45%, 61%);
    --pale-blue: hsl(236, 100%, 87%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 18px;
    height: 100%;
    background-color: var(--very-dark-blue);
  }

  body, button, input, textarea {
    font-family: 'Rubik', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  html {
    @media screen and (max-width: 1080px) {
      font-size: 94.5%;
    }

    @media screen and (max-width: 720px) {
      font-size: 88.9%;
    }
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`;
