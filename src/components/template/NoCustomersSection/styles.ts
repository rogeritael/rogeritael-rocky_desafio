import styled from "styled-components";
import rectangle from '../../../assets/Rectangle.png';

export const MaisClientesContainer = styled.section`
    /* background-color: ; */
    
    background: rgb(61,61,61);
    background: linear-gradient(0deg, rgba(61,61,61,1) 0%, rgba(12,12,12,1) 100%);
    min-height: 759px;


    //-----
    position: relative;

    &::before {
        content: '';
        width: 150px;
        height: 150px;
        background-image: url(${rectangle});
        background-size: cover;
        position: absolute;
        top: 0;
        left: 8%;
    }

    //----

    .app_limiter {
        min-height: 759px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .button_container {
        display: none;
    }

    .left_side {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* margin-bottom: -70px; */

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
                padding-right: 90px;
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
    
        .mais_clientes_card_container {
            display: grid;
            grid-template-columns: 255px 255px;
            grid-template-rows: 255px 255px;
            gap: 30px;
            flex-wrap: wrap;
        }
    }
    
    @media (max-width: 1100px) {
        
        .app_limiter {
            flex-direction: column;
        }

        .left_side {
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
            margin-bottom: 40px;
        }

        .right_side {
            margin-bottom: 40px;
            /* margin: 60px 0; */
            /* margin-bottom: 97px; */
        }
    }

    @media (max-width: 890px) {
        .left_side .price_container {
             display: none;
        }
    }

    @media (max-width: 640px) {

        .button_container {
            display: flex;
        }

        .left_side {
            padding: 20px;
            margin-bottom: 0;

            .price_container {
                display: none;
            }
        }

        .right_side {
            margin-bottom: 0;
            .mais_clientes_card_container {
                margin: 60px 0;
                grid-template-columns: 250px;
                grid-template-rows: repeat(4, 250px);
            }
        } 
    }


`;