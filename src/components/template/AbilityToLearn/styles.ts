import styled from "styled-components"

export const AbilityToLearnStyle = styled.section`
    height: 759px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .left_text_container {
        width: 450px;
        margin-right: 60px;
        padding: 0 20px;
        /* border: 1px solid red; */

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
        width: 523px;
        padding: 0 50px;
        margin-left: 60px;
    }
`;