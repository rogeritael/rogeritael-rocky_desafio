import styled from "styled-components";
import bg from '../../../assets/negociando.png';
import rectangle from '../../../assets/Rectangle.png';

export const AmIAbleStyle = styled.section`
    height: 898px;
    background-image: url(${bg});
    background-size: cover;

    //-----
    position: relative;

    &::before {
        content: '';
        width: 150px;
        height: 150px;
        background-image: url(${rectangle});
        background-size: cover;
        position: absolute;
        top: 0;
        right: 8%;
    }

    //----
    

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
            font-weight: 300;
        }
    }

    @media (max-width: 768px){
        justify-content: center;
        /* height: ; */

        .text_container {
            margin: 0;
            padding: 0 15px;
        }

    }

    @media(max-width: 720px){
        .text_container p {
            font-size: 18px;
        }
    }

    @media (max-width: 425px){
        .app_limiter {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .text_container {
            width: 100%;
            margin-bottom: -30px;

            h2 {
                font-size: var(--t1);
                margin-bottom: 30px;
            }

            p {
                font-size: 18px;
                line-height: 30px;
            }
        }

        .button_container {
            display: flex;
        }
    }

    @media (max-width: 370px){
        height: fit-content;
    }
`;