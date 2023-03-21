import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: none;
        border: none;
        color: #fff;
        box-sizing: border-box;
        font-family: 'Yantramanav';
    }

    body {
        background-color: #262626;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        } //15px
        @media (max-width: 720px){
            font-size: 87.5%;
        } //14px
    }

`;