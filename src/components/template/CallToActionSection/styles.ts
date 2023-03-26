import styled from "styled-components";
import banner from '../../../assets/Vector.png';

export const CallToActionContainer = styled.section`
    display: flex;
    align-items: center;
    min-height: 365px;
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

    h1.cta {
        flex: 1;
        font-size: var(--t2);
        padding: 0 40px;
    }

    @media (max-width: 1024px) {
        .price_container {
            width: 350px;
        }
    }

    @media (max-width: 924px) {
        flex-direction: column;

        h1.cta {
            text-align: center;
            margin: 75px 15px;
            padding: 0;
        }

        .price_container {
            width: 100%;
            height: 250px;
        }
    }
`;