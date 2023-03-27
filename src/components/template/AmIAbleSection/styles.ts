import styled from "styled-components";
import bg from '../../../assets/negociando.png';

export const AmIAbleStyle = styled.section`
    height: 898px;
    background-image: url(${bg});
    background-size: cover;

    .button_container {
        display: none;
    }
    
    .app_limiter {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .text_container {
        width: 410px;
        height: fit-content;
        margin-right: 127px;

        h2 {
            font-size: var(--t1);
            margin-bottom: 30px;
        }

        p {
            font-size: var(--tbody1);
            margin-bottom: 80px;
        }
    }

    @media (max-width: 768px){
        justify-content: center;

        .text_container {
            margin: 0;
            padding: 0 15px;
        }

    }

    @media (max-width: 425px){
        .app_limiter {
            flex-direction: column;
        }

        .text_container {
            width: 100%;
        }

        .button_container {
            display: flex;
        }
    }
`;