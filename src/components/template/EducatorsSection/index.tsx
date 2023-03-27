import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { EducatorCard } from "../../EducatorCard";
import { EducatorsSectionStyle } from "./styles";
import { educators } from "../../../mocks/educators";

export function EducatorsSection(){
    return(
        <AppLimiter>
            <EducatorsSectionStyle>
                <h1 className="title">Nossos <br/> Professores</h1>

                <div className="card_chain">
                    {educators.map((educator) => (
                        <EducatorCard
                            name={educator.name}
                            photo={educator.photo}
                            title={educator.title}
                            description={educator.description}
                        />
                    ))}
                    {/* <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard />
                    <EducatorCard /> */}
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