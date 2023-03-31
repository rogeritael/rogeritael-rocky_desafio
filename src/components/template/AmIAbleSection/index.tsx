import { AppLimiter } from "../../AppLimiter";
import { ButtonContainer } from "../../ButtonContainer";
import { AmIAbleStyle } from "./styles";

interface AmIAbleSectionProps {
    openModal: () => void,
}

export function AmIAbleSection({ openModal }: AmIAbleSectionProps){
    return(
        <AmIAbleStyle>
            <AppLimiter>
            <div className="text_container" >
                <h2 data-aos="fade-down-left">Eu estou Apto?</h2>

                <p data-aos="fade-left">
                    Se você é um empresário que deseja expandir sua presença online e impulsionar suas 
                    vendas, ou um profissional de marketing que quer se manter atualizado com as últimas 
                    tendências e técnicas de marketing, este curso é a chave para o 
                    seu sucesso.
                    <br/><br/>
                    Se você é um empresário que deseja expandir sua presença online e impulsionar suas 
                    vendas, ou um profissional de marketing que quer se manter atualizado com as últimas 
                    tendências e técnicas de marketing, este curso é a chave para o 
                    seu sucesso.
                </p>

            </div>
            <ButtonContainer openModal={openModal} />
            </AppLimiter>
        </AmIAbleStyle>
    );
}