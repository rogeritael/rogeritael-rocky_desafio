import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { Topic } from "../../Topic";
import { AbilityToLearnStyle } from "./styles";
import { methodologies } from "../../../mocks/methodologies";
import { ButtonContainer } from "../../ButtonContainer";

interface AbilityToLearnProps {
    openModal: () => void,
}

export function AbilityToLearn({ openModal }: AbilityToLearnProps){
    return(
        <AppLimiter>
        <AbilityToLearnStyle>
                <div className="left_text_container">
                    <div className="text">
                        <h2 data-aos="fade-down">Capacidade de aprender +</h2>
                        <p data-aos="fade-right">
                            Com o acesso ao conteúdo gravado, os alunos poderão 
                            absorver o conhecimento de forma mais independente e 
                            controlada, permitindo que se concentrem nas atividades 
                            práticas e na discussão de dúvidas e ideias durante as 
                            ao vivo toda segunda, quarta e sexta. 
                        </p>
                        <p data-aos="fade-right">
                            Ao final do curso, os alunos terão plena capacidade de 
                            aprender e aplicar as técnicas e estratégias de marketing
                            digital, graças à metodologia da sala de aula invertida,
                            que enfatiza a aplicação prática dos conceitos, a 
                            participação ativa dos alunos e a orientação 
                            personalizada do professor.
                        </p>
                    </div>
                    <div className="button_container">
                        <Button onClick={() => openModal} background="transparent" text="tenho interesse" />
                        <Button onClick={() => openModal} background="#F89D24" text="comprar agora" />

                    </div>
                </div>
                <div className="right_text_container" data-aos="fade-up-left">
                    {methodologies.map((methodology) => (
                        <Topic metodology={methodology.title} content={methodology.description}/>
                    ))}
                </div>

                <ButtonContainer openModal={openModal}/>
        </AbilityToLearnStyle>
        </AppLimiter>
    )
}