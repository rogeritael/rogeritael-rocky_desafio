import styled from "styled-components";

export const EducatorsSectionStyle = styled.section`
    h1.title {
        margin: 117px 0 80px 0;
        font-size: var(--t1);
        margin-left: 186px;
        font-weight: 400;
    }

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

        h1.title {
            margin-left: 20px;
            margin-bottom: 10px;
        }

        .card_chain {
            gap: 0;
        }
    }
`;