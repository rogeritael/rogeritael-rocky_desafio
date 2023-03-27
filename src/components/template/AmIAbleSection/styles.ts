import styled from "styled-components";
import bg from '../../../assets/negociando.png';

export const AmIAbleStyle = styled.section`
    height: 898px;
    background-image: url(${bg});
    background-size: cover;
    
    
    .app_limiter {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .text_container {
        width: 394px;
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

        .button_container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            button {
                margin: 0;
                width: 250px;
            }
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
        .button_container {
                flex-direction: column;
                gap: 30px;
            }
    }
`;