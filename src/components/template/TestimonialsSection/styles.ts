import styled, {keyframes} from "styled-components";
import bg from '../../../assets/testimonials_cover.png';
import arrow from '../../../assets/arrow.png';

const topArrowAnimation = keyframes`
    50% {
        scale: 0.8;
        transform: translate(-15,-15);
        opacity: 0.4;
    }
`

const bottomArrowAnimation = keyframes`
    50% {
        scale: 0.8;
        transform: translate(15,15);
        opacity: 0.4;
    }
`

const textEntry = keyframes`
    from {
        opacity: 0.4;
        scale: 0.7;
    }
    to {
        opacity: 1;
        scale: 1;
    }
`

const titleEntry = keyframes`
    from {
        opacity: 0.4;
        transform: translateX(40px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`
export const TestimonialsStyle = styled.section`
    height: 768px;
    background-image: url(${bg});
    background-size: cover;
    padding: 50px;
    display: flex;
    align-items: center;


    .slider_container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &::before {
            content: '';
            background-image: url(${arrow});
            position: absolute;
            width: 80px;
            height: 80px;
            top: 0;
            right: 0;
            animation: ${topArrowAnimation} 2s infinite ease-in-out;
        }

        &::after {
            content: '';
            background-image: url(${arrow});
            position: absolute;
            width: 80px;
            height: 80px;
            bottom: 0;
            left: 0;
            transform: rotate(180deg);
            animation: ${bottomArrowAnimation} 2s infinite ease-in-out;
        }

        .testimonial_box {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .testimonial_text_container {
                margin: 0 60px;
                width: 800px;
            }
            .testimonial{
                margin: 0 60px;
                display: block;

                &.active {
                    p, h3 {
                        display: block;
                    }
                }

                p, h3 {
                    display: none;
                }

                p {
                    font-size: var(--t2);
                    margin-bottom: 30px;
                    animation: ${textEntry} 500ms ease-in-out;
                }

                h3 {
                    text-transform: uppercase;
                    color: var(--orange);
                    text-align: right;
                    font-size: var(--tbody1);
                    animation: ${titleEntry} 500ms ease-in-out;
                }
            }

            .testimonial_arrow_controller {
                cursor: pointer;
                transition: 300ms ease-in-out;

                &:hover {
                    scale: 1.2;
                }

                img {
                    cursor: pointer;
                }
            }
        }

        .testimonial_controllers_box {
            margin-top: 80px;

            svg {
                font-size: 25px;
                margin: 0 15px;
                cursor: pointer;
                transition: 150ms ease-in-out;

                &.disabled {
                    opacity: 0.4;
                    cursor: auto;
                    &:hover {
                        scale: 1;
                    }
                }

                &:hover {
                    scale: 1.3;
                }
            }
        }
    }

    @media (max-width: 1024px){
        .slider_container .testimonial_box .testimonial_text_container {
            text-align: center;
            width: 600px;
            margin: 0 30px;
        }
    }

    @media (max-width: 1024px){
        padding: 10px;

        .slider_container .testimonial_box {
            .testimonial_arrow_controller {
                display: none;
            
            }

            .testimonial_text_container {
                width: 100%;
                margin: 0 10px;

                h3 {
                    text-align: center;
                }
            }
        }
    }

    @media (max-width: 900px){
        .testimonial_box .testimonial_text_container .testimonial {
            margin: 0;

            p {
                font-size: 35px;
            }
        } 
    }

    @media(max-width: 425px){
        height: 600px;
        overflow-x: hidden;

        .slider_container .testimonial_controllers_box svg {
            font-size: 25px;
            margin: 0 25px;
        }

        .testimonial_box .testimonial_text_container .testimonial {

            p {
                font-size: 25px;
            }

            h3 {
                font-size: 15px;
            }
        }
    }
`;