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
        padding-left: 177px;

        .mais_clientes_text_container {
            display: flex;
            flex-direction: column;
            

            h1 {
                font-size: var(--t1);
                line-height: 83px;
                font-weight: normal;
                margin-bottom: 20px;
            }

            .subtitle {
                font-weight: bold;
                margin-top: 20px;
                margin-bottom: 10px;
                font-size: var(--tbody1);
            }

            .description {
                width: 400px;
                margin-bottom: 20px;
                font-weight: 300;
                font-size: var(--tbody1);
            }
        }

        .price_container {
            .price {
                margin-left: auto;
                text-align: right;
                padding-right: 145px;
                font-weight: bold;
            }

            
            .button_container {
                display: flex;
            
                button {
                    margin: 15px 0 0 0;

                    &:first-child {
                        margin-right: 30px;
                    }
                }
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