import styled from "styled-components";
import rectangle from '../../../assets/Rectangle.png';

export const EducatorsSectionStyle = styled.section`
    h1.title {
        margin: 117px 0 80px 0;
        font-size: var(--t1);
        margin-left: 186px;
        font-weight: 400;
    }

    //-----
    position: relative;

    &::before {
        content: '';
        width: 150px;
        height: 150px;
        background-image: url(${rectangle});
        background-size: cover;
        position: absolute;
        top: -115px;
        left: 8%;
    }
    //----

    .card_chain {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }

    @media (max-width: 768px) {
        h1.title {
            margin-left: 40px;
        }
    }
    
    @media (max-width: 425px) {

        &::before {
            top: -50px;
        }

        h1.title {
            margin: 50px 20px 10px 10px;
        }

    }
`;