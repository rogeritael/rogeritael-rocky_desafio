import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Cores */
        --black1: #OCOCOC;

        --dark-gray1: #262626;

        --medium-gray1: #262626;
        --medium-gray2: #2C2C2C;

        --light-gray1: #6E6E6E;
        --light-gray2: #686868;
        --light-gray3: #707070;
    
        --orange: #F89D24;
        --light-orange: #FEC024;

        /* Tamanhos de texto */
        --t1: 4rem;
        --t2: 3rem;
        --t3: 2rem;
        --t4: 1.5rem;
        
        --sub1: 2rem;
        --sub2: 1.5rem;
        --sub3: 1rem;

        --tbody1: 1.25rem;
        --tbody2: 1rem;
    }

    body, html {
        overflow-x: hidden;
    }

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

    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: black;
        background: var(--light-gray2);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: var(--orange);
        border-radius: 3px;
    }
`;