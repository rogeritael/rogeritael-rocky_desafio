import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { Topic } from "../../Topic";
import { AbilityToLearnStyle } from "./styles";

export function AbilityToLearn(){
    return(
        <AppLimiter>
        <AbilityToLearnStyle>
                <div className="left_text_container">
                    <h2>Capacidade de aprender +</h2>
                    <p>
                        Com o acesso ao conteúdo gravado, os alunos poderão 
                        absorver o conhecimento de forma mais independente e 
                        controlada, permitindo que se concentrem nas atividades 
                        práticas e na discussão de dúvidas e ideias durante as 
                        ao vivo toda segunda, quarta e sexta. 
                    </p>
                    <p>
                        Ao final do curso, os alunos terão plena capacidade de 
                        aprender e aplicar as técnicas e estratégias de marketing
                        digital, graças à metodologia da sala de aula invertida,
                        que enfatiza a aplicação prática dos conceitos, a 
                        participação ativa dos alunos e a orientação 
                        personalizada do professor.
                    </p>
                    <div className="button_container">
                        <Button background="transparent" text="tenho interesse" />
                        <Button background="#F89D24" text="comprar agora" />

                    </div>
                </div>
                <div className="right_text_container">
                    <Topic metodology="metodologia" content="conteudo conteudoconteudoconteudo conteudoconteudo conteudoconteudoconteudoconteudo conteudoconteudo conteudo conteudoconteudoconteudoconteudo"/>
                    <Topic metodology="metodologia" content="conteudo conteudoconteudoconteudo conteudoconteudo conteudoconteudoconteudoconteudo conteudoconteudo conteudo conteudoconteudoconteudoconteudo"/>
                    <Topic metodology="metodologia" content="conteudo conteudoconteudoconteudo conteudoconteudo conteudoconteudoconteudoconteudo conteudoconteudo conteudo conteudoconteudoconteudoconteudo"/>
                    <Topic metodology="metodologia" content="conteudo conteudoconteudoconteudo conteudoconteudo conteudoconteudoconteudoconteudo conteudoconteudo conteudo conteudoconteudoconteudoconteudo"/>
                </div>
        </AbilityToLearnStyle>
        </AppLimiter>
    )
}