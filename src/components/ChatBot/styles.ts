import styled, { keyframes } from "styled-components";
import chatbot_image from '../../assets/chatbot_moira.jpg';

interface ChatbotProps {
    isOpen?: boolean
}

const entry = keyframes`
    from {
        scale: 0.1;
        right: -70px;
        bottom: -90px;
    }
    to{
        scale: 1;
        right: 60px;
        border: 80px;
    }
`;

export const ChatBotStyle = styled.div<ChatbotProps>`
    width: 320px;
    height: 400px;
    background-color: #fff;
    position: fixed;
    bottom: 80px;
    right: 60px;
    border-radius: 10px;
    animation: ${entry} 200ms ease-in-out;
    display: ${(props) => props.isOpen === true ? 'block' : 'none'} ;

    .chat_image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #000;
        margin-right: 10px;
        background-image: url(${chatbot_image});
        background-size: cover;
    }

    .chatbot_header {
        height: 50px;
        border-radius: 10px 10px 0 0;
        background-color: var(--orange);
        display: flex;
        padding: 3px 10px;

        .chat_info {
            display: flex;
            align-items: center;
            
            .chat_text {
                h1 {
                    font-size: var(--tbody1);
                    margin-bottom: -3px;
                }
                p {
                    font-size: var(--tbody2);
                    position: relative;
                    padding-left: 15px;
                    color: rgba(255,255,255, 0.8);

                    &::before {
                        content: '';
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #7CFC00;
                        position: absolute;
                        left: 0;
                        bottom: 6px;
                        border: 2px solid rgba(255,255,255, 0.6);
                    }
                }
            }
        }

        svg {
            text-align: center;
            height: 100%;
            color: #fff;
            margin-left: auto;
            margin-right: 5px;
            opacity: 0.6;

            transition: 500ms ease-in-out;

            &:hover {
                transform: rotate(180deg);
                cursor: pointer;
                scale: 1.2;
            }
        }
    }

    .chat_body {
        
        .chat_message {
            padding: 10px;
            p {
                background-color: #e6e6e6;
                width: fit-content;
                padding: 10px;
                border-radius: 15px;
                margin: 5px;
                color: #333;
            }

            ul.options {
                margin-top: 20px;
                li {
                    border: 2px solid var(--orange);
                    width: 100%;
                    text-align: center;
                    padding: 10px;
                    color: var(--orange);
                    border-radius: 20px;
                    list-style: none;
                    margin: 5px 0;
                    cursor: pointer;
                    transition: 800ms ease-in-out;

                    &:hover {
                        background-color: var(--orange);
                        color: #fff;
                    }
                }
            }
        }
    }
`;