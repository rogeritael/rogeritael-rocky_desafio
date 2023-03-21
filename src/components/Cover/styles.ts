import styled, { keyframes } from 'styled-components';

const leftToRightAnimation = keyframes`
    from {
        opacity: 0;
        transform: translate(-200px);
    }
    to {
        opacity: 1;
        transform: translate(0);
    }
`

const rightToLeftAnimation = keyframes`
    from {
        filter: opacity(0);
        transform: translate(200px);
    }
    to {
        filter: opacity(.5);
        transform: translate(0);
    }
`
const logoAnimation = keyframes`
    20%{
        transform: scale(0.7);
    }
    40% {
        transform: scale(1);
    }
    60% {
        transform: rotate(-360deg);
    }
`

export const CoverContainer = styled.header`
    margin: 0 auto;
    /* max-width: 800px; */
    width: 100%;
    min-height: 100vh;
    padding: 0px 10px 15px 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(to left top, #2c2c2c, #242424, #1d1d1d, #151515, #0c0c0c);

    .logo {
        position: absolute;
        top: 25px;
        left: 60px;
        animation: ${leftToRightAnimation} 600ms ease-in-out;

        &:hover {
            animation: ${logoAnimation} 1s ease-in-out;
        }
    }

    h1.call_to_action_title {
        margin-top: 30px;
        /* font-family: 'Yantramanav'; */
        max-width: 800px;
        font-size: 3.375rem;
        line-height: 70px;
        text-align: center;
        animation: ${leftToRightAnimation} 900ms ease-in-out;
    }

    p.cover_description_text {
        /* font-family: 'Yantramanav'; */
        filter: opacity(.5);
        margin-top: 30px;
        margin-bottom: 75px;
        font-weight: 300;
        font-size: 18px;
        max-width: 450px;
        line-height: 30px;
        text-align: center;
        animation: ${rightToLeftAnimation} 900ms ease-in-out;
        position: relative;
    }
    

    @media (max-width: 1200px){
        h1.call_to_action_title {
            margin-top: 100px;
        }

        .logo {
            scale: 0.8;
        }
    }

    @media (max-width: 570px){
        h1.call_to_action_title {
            margin-top: 150px;
        }

        .logo {
            scale: 0.7;
        }
    }

    @media (max-width: 375px){
        .button_container {
            display: flex;
            flex-direction: column;
        }

        p.cover_description_text {
            margin-bottom: 40px;
            font-size: 16px;
        }

        h1.call_to_action_title {
            margin-top: 120px;
            font-weight: normal;
        }

        .logo {
            left: 20px;
        }
    }
`;