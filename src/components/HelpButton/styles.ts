import styled, { keyframes } from "styled-components";

const entryAnimation = keyframes`
    from {
        transform: translate(30px, 10px);
        opacity: 0;
        scale: 0.6;
    }
    to {
        transform: translate(0, 0) rotate(0);
        opacity: 1;
        scale: 1;
    }
`;

export const HelpButtonStyle = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: var(--orange);
    font-size: var(--t2);
    font-weight: bold;
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 250ms ease-in-out;
    animation: ${entryAnimation} 500ms ease-out;
    -webkit-box-shadow: 0px 0px 18px -3px rgba(255,229,206,.3);
    -moz-box-shadow: 0px 0px 18px -3px rgba(255,229,206,.3);
    box-shadow: 0px 0px 18px -3px rgba(255,229,206,.3);
    z-index: 1;

    &:hover {
        scale: 1.1;

        .text_chain {
            transition: 500ms ease-in-out;
            transform: rotate(360deg);

            p {
                pointer-events: none;
            }
        }
    }

    @media(max-width: 768px){
        display: none;
    }
`;