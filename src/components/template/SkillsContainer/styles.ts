import styled, { keyframes } from "styled-components";
import skillbg from '../../../assets/skills_bg.png';

const shakeButtonAnimation = keyframes `
    0%{
        transform: rotateX(15deg);
    }
    5%{
        transform: rotateX(0);
    }
    10%{
        transform: rotateX(-15deg);
    }
`;


export const SkillsStyle = styled.section`
    height: 611px;
    width: 100%;
    background-image: url(${skillbg});
    background-size: 100%;
    background-position: center;

    .app_limiter {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .button_container {
        display: none;
    }

    .skills_box{
        display: flex;

        .skills_list_container ul {
            background-color: var(--light-gray2);
            width: 460px;
            height: 379px;

            li {
                font-size: var(--t3);
                font-weight: 300;
                list-style: none;
                height: 25%;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: .5;
                cursor: pointer;
                position: relative;

                &::before {
                    content: '';
                    width: 0;
                    height: 100%;
                    background-color: var(--light-gray3);
                    position: absolute;
                    left: 0;
                    z-index: -1;
                    transition: 500ms;
                }

                &:hover {
                    &::before {
                        width: 100%;
                    }

                }

                &.active {
                    opacity: 1;
                }

            }
        }

        .skills_description_container {
            width: 600px;
            height: 379px;
            padding: 65px 100px;
            background-color: var(--dark-gray1);
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .skill_description{
                font-size: var(--tbody1);
                font-weight: 300;
            }

            .button_container {
                button {
                    font-size: var(--tbody1);
                    background-color: transparent;
                    cursor: pointer;
                    position: relative;
                    transition: 500ms;

                    &:hover {
                        scale: 1.1;
                    }
                }

                .purchase_now_button {
                    margin-left: 30px;
                    color: var(--orange);
                    
                }
            }
        }
    }

    @media (max-width: 1124px){
        .skills_box .skills_list_container ul {
            text-align: center;
            width: 230px; 
        }

        .skills_box .skills_description_container {
            width:450px;
            padding: 55px 50px;
        }
    }

    @media (max-width: 768px){
        .app_limiter {
            flex-direction: column;
        }

        .button_container {
            display: flex;
        }

        .skills_box { 
            width: 90%;
            
            
            .skills_list_container {
                /* border: 1px solid red; */
                width: 100%;
            
                ul {
                    width: 100%;
                }
            }
            
        }

        .skills_box .skills_description_container {
            display: none;
        }
    }
`