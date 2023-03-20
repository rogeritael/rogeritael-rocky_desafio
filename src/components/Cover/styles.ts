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


export const CoverContainer = styled.header`
    margin: 0 auto;
    max-width: 800px;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1.call_to_action_title {
        font-family: 'Yantramanav';
        max-width: 800px;
        font-size: 3.375rem;
        line-height: 70px;
        text-align: center;
        animation: ${leftToRightAnimation} 900ms ease-in-out;
    }

    p.cover_description_text {
        font-family: 'Yantramanav';
        filter: opacity(.5);
        margin-top: 30px;
        margin-bottom: 75px;
        font-weight: 300;
        font-size: 18px;
        max-width: 450px;
        line-height: 30px;
        text-align: center;
        animation: ${rightToLeftAnimation} 900ms ease-in-out;
    }

    

    
`;