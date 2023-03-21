import styled from "styled-components";

export const CallToActionContainer = styled.section`
    display: flex;
    align-items: center;
    height: 365px;

    .price_container {
        width: 500px;
        height: 300px;
        background-color: #f89d24;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .price {
            font-size: 64px;
        }

    }

    h1 {
        flex: 1;
    }
`;