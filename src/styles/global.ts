import { createGlobalStyle } from "styled-components";

import githubBackground from "./../assets/github-background.svg";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }
    body{
        background: #E5E5E5 url(${githubBackground}) no-repeat 70% top;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }
    #root{
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
    button{
        cursor: pointer;
    }
`;