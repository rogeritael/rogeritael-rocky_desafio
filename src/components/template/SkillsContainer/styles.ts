import styled, { keyframes } from "styled-components";
import skillbg from '../../../assets/skills_bg.png';
import skill_arrow from '../../../assets/skill_arrow.png';

const bounceAnimation = keyframes `
    0% { transform: translateY(0); }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(0px);
    }
`

const turnDownArrow = keyframes`
    to {
        transform: rotate(180deg);
    }
`;

const contentEntry = keyframes`
    from {
        opacity: 0;
        scale: 0.4;
    }
    to {
        opacity: 1;
        scale: 1;
    }
`;

const toggleSkill = keyframes`
    from {
        height: 0px;
        border: none;
        opacity: 0;
        p {
            opacity: 0;
        }
    }
    to {
        height: 100%;
        opacity: 1;
        border-top: 1px solid var(--orange);
        border-bottom: 1px solid var(--orange);
        p {
            opacity: 1;
        }
    }
`

export const SkillsStyle = styled.section`
    min-height: 611px;
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

                &.active {
                    h2 {
                        &::after {
                            animation: ${turnDownArrow} 500ms ease-in-out forwards;
                        }
                    }
                }

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
                    }

                    &::after {
                        content: '';
                        width: 11.31px;
                        height: 6.6px;
                        position: absolute;
                        right: 30px;
                        bottom: 45px;
                        background-image: url(${skill_arrow});
                        background-repeat: no-repeat;
                        display: none;
                    }

                    &:hover {
                        &::before {
                            width: 100%;
                        }
                    }
                }
                p.description {
                    display: none;
                    animation: ${toggleSkill} 300ms ease-in-out;
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
                max-width: 450px;
                text-align: center;
            }

            .buttons {
                input[type=button] {
                    margin-top: 30px;
                    background-color: transparent;
                    font-size: 20px;
                    color: var(--orange);
                    cursor: pointer;
                    animation: ${bounceAnimation} 1500ms ease-in-out infinite;

                    &:hover {
                        transition: 500ms ease-in-out;
                        scale: 1.05;
                    }

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

                .single_skill {

                    h2 {
                        text-align: left;
                        padding: 0 30px;

                        &::after {
                            display: block;
                        }
                    }

                    p.description {
                        display: block;
                        min-height: 176px;
                        background: #262626;
                        padding: 25px 62px;
                        font-size: 20px;
                        font-weight: 300;
                        text-align: center;
                        border-top: 1px solid var(--orange);
                        border-bottom: 1px solid var(--orange);
                    }
                } 
            }
        } 
    }

    @media (max-width: 620px){
        .skills .header .single_skill {
            p.description {
                padding: 25px 42px;
            }
        }
    }
`