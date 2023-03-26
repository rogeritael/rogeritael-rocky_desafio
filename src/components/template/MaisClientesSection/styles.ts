import styled from "styled-components";

export const MaisClientesContainer = styled.section`
    /* background-color: ; */
    min-height: 759px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: rgb(61,61,61);
    background: linear-gradient(0deg, rgba(61,61,61,1) 0%, rgba(12,12,12,1) 100%);

    .left_side {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
                max-width: 400px;
                margin-bottom: 20px;
                font-weight: 300;
                font-size: var(--tbody1);
            }
        }

        .price_container {
            margin-top: 30px;

            .price {
                margin-left: auto;
                text-align: right;
                padding-right: 115px;
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

    .right_side {
        margin: 0;
    
        .mais_clientes_card_container {
            display: grid;
            grid-template-columns: 255px 255px;
            grid-template-rows: 255px 255px;
            gap: 30px;
            flex-wrap: wrap;
        }
    }
    
    @media (max-width: 1100px) {
       flex-direction: column;

        .left_side {
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
        }

        .right_side {
            margin: 60px 0;
            /* margin-bottom: 97px; */
        }
    }

    @media (max-width: 890px) {

        .left_side .price_container {
             display: none;
        }
    }

    @media (max-width: 640px) {

        .left_side {
            padding: 20px;

            .price_container {
                display: none;
            }
        }

        .right_side .mais_clientes_card_container {
            margin: 60px 0;
            grid-template-columns: 250px;
            grid-template-rows: repeat(4, 250px);
            /* margin-bottom: 97px; */
        }
    }

`;