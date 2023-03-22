import { AppLimiter } from "../AppLimiter";
import { Button } from "../Button";
import { EducatorCard } from "../EducatorCard";
import { EducatorsSectionStyle } from "./styles";

export function EducatorsSection(){
    return(
        <AppLimiter>
            <EducatorsSectionStyle>
                <h1>Nossos <br/> Professores</h1>
                
                <div className="card_chain">
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                </div>
                <div className="button_container">
                    <Button
                        text="Tenho interesse"
                        background="transparent"
                    />
                    <Button
                        text="Comprar Agora"
                        background="#F89D24"
                    />
                </div>     
            </EducatorsSectionStyle>
        </AppLimiter>
    )
}