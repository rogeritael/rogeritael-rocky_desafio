import styled from "styled-components";
import skillbg from '../../assets/skills_bg.png';

export const SkillsStyle = styled.section`
    height: 611px;
    width: 100%;
    background-image: url(${skillbg});
    background-size: 100%;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: row;

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

                &.active {
                    opacity: 1;
                }

            }
        }

        .skills_description_container {
            width: 600px;
            height: 379px;
            padding: 65px 125px;
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
`