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

    .button_container {
        width: max-content;
        margin: 0 auto;
        padding: 100px 0 125px 0;
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

        .button_container {
            display: flex;
            flex-direction: column;

            button {
                width: 250px;
            }
        }
    }
`;