import styled, { keyframes } from "styled-components";

interface ButtonProps {
    background: '#F89D24' | 'transparent',
}

const opacityAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px) scale(0.8);
    }
    to{
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

const bounceAnimation = keyframes `
    0% { transform: translateY(0); }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }`

export const ButtonContainer = styled.button<ButtonProps>`
    padding: .9rem 0.7rem;
    margin: 10px 15px;
    font-size: 12px;
    font-weight: bold;

    background-color: ${props => props.background};
    color: #fff;
    border: ${props => props.background === 'transparent' ? '1px solid #fff' : 'none' };

    animation: ${opacityAnimation} 1s ease, ${bounceAnimation} 2s 1s ease infinite;
    /* animation:  */
    border-radius: 5px;
    cursor: pointer;
`;