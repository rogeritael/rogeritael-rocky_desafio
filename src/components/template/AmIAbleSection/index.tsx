import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { ButtonContainer } from "../../ButtonContainer";
import { AmIAbleStyle } from "./styles";

interface AmIAbleSection {
    openModal: () => void,
}

export function AmIAbleSection({ openModal }: AmIAbleSection){
    return(
        <AmIAbleStyle>
            <AppLimiter>
            <div className="text_container">
                <h2>Eu estou Apto?</h2>

                <p>
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