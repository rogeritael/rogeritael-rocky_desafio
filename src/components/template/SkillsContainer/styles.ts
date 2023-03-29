import styled, { keyframes } from "styled-components";
import skillbg from '../../../assets/skills_bg.png';
import skill_arrow from '../../../assets/skill_arrow.png';

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

const toggleSkill = keyframes`
    from {
        /* height: 0px; */
        padding: 0 32px;
        border: none;
        opacity: 0;
        p {
            opacity: 0;
        }
    }
    to {
        height: auto;
        opacity: 1;
        padding: 25px 32px;
        border-top: 1px solid var(--orange);
        border-bottom: 1px solid var(--orange);
        p {
            opacity: 1;
        }
    }
`

export const SkillsStyle = styled.section`
    min-height: 611px;
    /* width: 100%; */
    display: flex;
    align-items: center;
    background-image: url(${skillbg});
    background-size: cover;
    background-position: center;
    position: relative;

    h1 {
        font-size: 48px;
        max-width: 255px;
        font-weight: 400;
        margin: 40px 0;
        left: 60px;
        display: none;
        position: absolute;
    }

    .app_limiter {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
        /* border: 1px solid red; */
    }

    .button_container {
        display: none;
    }

    .skills {
        display: flex;

        .header {
            width: 460px;
            background-color: #686868;

            .single_skill {
                border-top: 1px solid rgba(0,0,0,0.06);

                h2 {
                    text-align: center;
                    line-height: 94px;
                    height: 94px;
                    cursor: pointer;
                    font-weight: 300;
                    position: relative;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 0;
                        height: 100%;
                        background-color: #fff;
                        opacity: 0.05;
                        transition: 500ms ease-in-out;
                        /* background-color: black; */
                    }

                    &:hover {
                        &::before {
                            width: 100%;
                        }
                    }
                }
                p.description {
                    display: none;    
                }
            }
        }

        .body {
            width: 600px;
            height: 379px;
            background-color: #262626;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                font-size: 20px;
                font-weight: 300;
                max-width: 350px;
                text-align: center;
            }

            .buttons {
                input[type=button] {
                    margin-top: 30px;
                    background-color: transparent;
                    font-size: 20px;
                    color: var(--orange);
                    cursor: pointer;

                    &:first-child {
                        margin-right: 20px;
                        color: #fff;
                    }
                }
            }
        }
    }

    @media (max-width: 1100px){
        .skills {
            margin-top: 210px;
            .header {
                width: 350px;
            }
        
            .body {
                width: 500px;
            }
        }
    }

    @media (max-width: 900px){
        .skills {
            .header {
                width: 300px;
            }
        
            .body {
                /* width: 500px; */

                p {
                    max-width: 450px;
                }
            }

            /* .single_skill p.description {
                display: block;
            } */
        }
    }

    @media(max-width: 820px){
        h1 {
            display: block;
        }

        .button_container {
            display: flex;
        }

        .skills {
            width: 90%;

            .body {
                display: none;
            }

            .header {
                width: 100%;
            }
        } 
    }
`