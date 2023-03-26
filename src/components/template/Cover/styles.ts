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
    width: 100%;

    padding: 180px 15px;

    /* display: flex; */
    background-image: linear-gradient(to left top, #2c2c2c, #242424, #1d1d1d, #151515, #0c0c0c);

    .limiter {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo {
        position: absolute;
        width: 110px;
        height: 90px;
        top: 25px;
        left: 60px;
        animation: ${leftToRightAnimation} 600ms ease-in-out;

        &:hover {
            animation: ${logoAnimation} 1s ease-in-out;
        }
    }

    h1.call_to_action_title {
        max-width: 800px;
        font-size: var(--t1);
        line-height: 70px;
        text-align: center;
        animation: ${leftToRightAnimation} 900ms ease-in-out;
    }

    p.cover_description_text {
        filter: opacity(.5);
        margin-top: 30px;
        margin-bottom: 75px;
        font-weight: 300;
        font-size: var(--tbody1);
        max-width: 450px;
        line-height: 30px;
        text-align: center;
        animation: ${rightToLeftAnimation} 900ms ease-in-out;
        position: relative;
    }

    @media (max-width: 560px){
            /* padding: 80px 40px; */
        padding-top: 150px;

        p.cover_description_text {
            margin-top: 15px;
            font-size: var(--tbody1);
        }

        .logo {
            scale: 0.8;
        }
    }

    @media (max-width: 425px){
        padding: 0 10px 50px 10px;


        h1.call_to_action_title {
            font-size: var(--t2);
        }

        .button_container {
            display: flex;
            flex-direction: column;

            button {
                width: 250px;
            }
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