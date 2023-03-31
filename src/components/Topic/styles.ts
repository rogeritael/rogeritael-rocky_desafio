import styled, {keyframes} from "styled-components";
import elipse from '../../assets/topic_ellipse.png';

const elipseAnimation = keyframes`
    50%{
        transform: scale(0.5);
        opacity: .0;
    }
`;

export const TopicStyle = styled.div`
    width: 420px;
    margin-bottom: 30px;

    h4 {
        font-size: var(--tbody1);
        text-transform: uppercase;
        color: var(--orange);
        margin-left: 25px;
        position: relative;
        margin-bottom: 10px;

        &::before {
            content: '';
            width: 15px;
            height: 15px;
            left: -25px;
            top: 5px;
            position: absolute;
            background-image: url(${elipse});
            animation: ${elipseAnimation} 2s infinite ease-in-out;
        }
    }

    p {
        font-size: var(--sub3);
    }
`;