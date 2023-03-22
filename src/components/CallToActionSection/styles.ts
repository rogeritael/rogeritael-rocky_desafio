import styled from "styled-components";
import banner from '../../assets/Vector.png';

export const CallToActionContainer = styled.section`
    display: flex;
    align-items: center;
    height: 365px;
    position: relative;
    background-color: var(--black1); 
    background-image: url(${banner});

    .price_container {
        width: 500px;
        height: 300px;
        background-color: #f89d24;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .price {
            font-size: var(--t1);
            line-height: 83px;
            margin-bottom: 25px;
        }

        button {
            background-color: #fff;
            color: #f89d24;
        }
    }

    h1 {
        flex: 1;
        font-size: var(--t2);
        padding: 0 40px;
    }
`;