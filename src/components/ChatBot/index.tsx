import { ChatBotStyle } from "./styles";
import { GrClose } from 'react-icons/gr';


export function ChatBot(){
    return(
        <ChatBotStyle>
            <div className="chat_bot">
                <div className="chatbot_header">
                    <div className="chat_info">
                        <span className="chat_image"></span>
                        <div className="chat_text">
                            <h1>Moira</h1>
                            <p>Online agora</p>
                        </div>
                    </div>
                    <GrClose />
                </div>
                <div className="chat_body">
                    <div className="chat_message">
                        <span className="chat_image"></span>
                        <div className="chat_message_container">
                            <p className="message">Olá, meu nome é Moira</p>
                            <p>Como posso te ajudar?</p>
                            <ul className="options">
                                <li>Tenho uma dúvida</li>
                                <li>Quero relatar um bug no site</li>
                                <li>Gostaria de registrar um depoimento</li>
                            </ul>
                        </div>
                    </div>
                    <div className="user_messa">
                        <p></p>
                    </div>
                </div>
                <input type="text" name="" id="" />
            </div>
        </ChatBotStyle>
    )
}