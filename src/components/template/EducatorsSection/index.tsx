import { AppLimiter } from "../../AppLimiter";
import { EducatorCard } from "../../EducatorCard";
import { EducatorsSectionStyle } from "./styles";
import { educators } from "../../../mocks/educators";
import { ButtonContainer } from "../../ButtonContainer";

interface EducatorSectionProps {
    openModal: () => void
}

export function EducatorsSection({ openModal }: EducatorSectionProps){
    return(
        <AppLimiter>
            <EducatorsSectionStyle>
                <h1 className="title" data-aos="zoom-in-down">Nossos <br/> Professores</h1>

                <div className="card_chain" data-aos="fade-right">
                    {educators.map((educator) => (
                        <EducatorCard
                            name={educator.name}
                            photo={educator.photo}
                            title={educator.title}
                            description={educator.description}
                        />
                    ))}
                </div>
                <ButtonContainer openModal={openModal} />   
            </EducatorsSectionStyle>
        </AppLimiter>
    )
}