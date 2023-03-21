import styled from "styled-components";

export const MaisClientesContainer = styled.section`
    /* background-color: ; */
    min-height: 100vh;
    display: flex;
    background: rgb(61,61,61);
    background: linear-gradient(0deg, rgba(61,61,61,1) 0%, rgba(12,12,12,1) 100%);

    .left_side {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        .mais_clientes_text_container {
            display: flex;
            flex-direction: column;
            

            h1 {
                font-size: 3.375rem;
                font-weight: normal;
                margin-bottom: 20px;
            }

            .subtitle {
                font-weight: bold;
                margin-bottom: 10px;
            }

            .description {
                width: 400px;
                margin-bottom: 20px;
                opacity: .5;
                font-weight: 300;
            }
        }

        .price_container {
            .price {
                margin-left: auto;
                text-align: right;
                padding-right: 30px;
                font-weight: bold;
            }
        }
    }

    
    
    .mais_clientes_card_container {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 20px;
    }

    @media (max-width: 758px) {
        flex-direction: column;
    }
`;