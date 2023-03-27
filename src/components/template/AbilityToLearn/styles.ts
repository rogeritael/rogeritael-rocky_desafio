import styled from "styled-components"

export const AbilityToLearnStyle = styled.section`
    min-height: 759px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    .button_container {
        display: none;
    }

    .left_text_container {
        width: 450px;
        padding: 0 20px;

        h2 {
            font-size: var(--t1);
            margin-bottom: 20px;
        }

        p {
            font-size: var(--tbody1);
            margin-bottom: 20px;
            font-weight: 300;
        }

        .button_container {
            margin-top: 60px;
        }
    }

    .right_text_container {
        padding: 0 10px;
    }

    @media (max-width: 980px){
        flex-direction: column;

        .left_text_container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            padding: 10px 40px;

            .text {
                max-width: 375px;
            }

            .button_container {
                display: flex;
                flex-direction: column;
            }
        }

        .right_text_container{
            width: 100%;

            div {
                margin: 40px auto;
                padding: 0 40px;
                width: 100%;
            }
        } 
    }

    @media(max-width: 768px){
        .left_text_container .button_container {
            display: none;
        }
    }

    @media(max-width: 425px){
        .button_container {
            display: flex;
        }
        .right_text_container{

            div {
                padding: 0 20px;
            }
        } 
    }
`;