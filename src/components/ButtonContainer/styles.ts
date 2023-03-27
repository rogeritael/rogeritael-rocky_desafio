import styled from "styled-components";

export const ButtonContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;

    @media (max-width: 425px){
        display: flex;
        flex-direction: column;

        button {
            width: 250px;
        }
    }
`;