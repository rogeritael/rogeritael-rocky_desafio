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

export const TestimonialsStyle = styled.section`
    height: 768px;
    background-image: url(${bg});
    padding: 50px;

    .slider_container {
        width: 100%;
        height: 100%;
        position: relative;

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

            .testimonial{
                margin: 0 60px;
            }
        }
    }
`;