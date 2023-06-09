import styled, { keyframes } from "styled-components";

interface ModalStyleProps {
    isModalOpen?: boolean,
}

const closeButtonEntry = keyframes`
    from {
        transform: translate(30px, -30px) rotate(90deg);
        opacity: 0.3;
        scale: 0.4;
    }
    to {
        transform: translate(0, 0) rotate(0);
        opacity: 1;
        scale: 1;
    }
`

const inputEntry = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const titleEntry = keyframes`
    from{
        transform: translateY(-30px);
        opacity: 0.4;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const subtitleEntry = keyframes`
    from{
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalStyle = styled.div<ModalStyleProps>`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${(props) => props.isModalOpen === true ? 'flex' : 'none'};

    span.close_modal_area {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .modal {
        width: 614px;
        padding-bottom: 40px;
        height: fit-content;
        background-color: var(--medium-gray1);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        svg {
            font-size: 30px;
            position: absolute;
            right: 40px;
            top: 60px;
            color: #ccc;
            cursor: pointer;
            display: flex;
            opacity: 0.5;
            animation: ${closeButtonEntry} 500ms ease-in-out; 

            &:hover {
                transition: 500ms ease-in-out;
                transform: rotate(180deg);
            }
        }

        h1 {
            margin: 100px 0 20px 0;
            text-align: center;
            text-transform: uppercase;
            color: var(--orange);
            animation: ${titleEntry} 500ms ease-in-out;
        }

        p.description {
            margin: 0 90px;
            text-align: center;
            margin-bottom: 40px;
            font-size: 16px;
            animation: ${subtitleEntry} 1.5s ease-out;
        }

        form#modal {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;

            input {
                width: 230px;
                height: 41px;
                padding-left: 20px;
                border-radius: 4px;
                color: #333;
                border: 1px solid var(--orange);

                &::placeholder {
                    color: var(--orange);
                }

                &[type=checkbox] {
                    height: 15px;
                    width: 15px;
                    margin: 0;
                    padding: 0;
                    display: block;
                    border: 1px solid var(--orange);
                    accent-color: var(--orange);
                    opacity: 0;
                }

                &.inputEntry {
                    animation: ${inputEntry} 1900ms ease-in-out forwards;
                }

                &.delay1 {
                    animation-duration: 1600ms;
                }

                &.delay2 {
                    animation-duration: 1300ms;
                }

                &.delay3 {
                    animation-duration: 1000ms;
                }
            }

            span {
                display: flex;
                gap: 10px;
                align-items: center;
                
                p {
                    animation: ${inputEntry} 500ms ease-out;
                }
            }

            button {
                margin: 20px 0;
                width: 230px;
            }
        }

    }

    @media (max-width: 425px){
        .modal {
            height: 100%;

            svg {
                right: 15px;
                font-size: 25px;
                top: -30px;
                margin-top: 50px;
            }

            p.description {
                margin: 0 40px 20px 40px;
            }
        } 
    }
`;