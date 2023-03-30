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
    }
`

export const ButtonContainer = styled.button<ButtonProps>`
    padding: 16px 24.73px;
    margin: 10px 15px;
    font-size: var(--sub3);
    font-weight: bold;

    background-color: ${props => props.background};
    color: #fff;
    border: ${props => props.background === 'transparent' ? '1px solid #fff' : '' };

    animation: ${opacityAnimation} 1s ease, ${bounceAnimation} 2s 1s ease infinite;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    transition: 500ms;

    &::before {
        content: '';
        width: 100%;
        height: 101%;
        opacity: 0;
        position: absolute;
        border-radius: 5px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: #fff;
        z-index: -1;
        transition: 500ms;
    }

    //efeito ao passar o mouse
    &:hover {
        &::before {
            ${props => props.background === 'transparent' ? 'opacity: 1; border: none' : ''};
        }

        color: ${props => props.background === 'transparent' ? '#262626' : '#F89D24'};
        ${props => props.background === '#F89D24' ? `
            border: 1px solid #F89D24;
            background-color: transparent;
        ` : 'transparent'};
    }

    @media (max-width: 425px){
        font-size: 16px;
    }
`;