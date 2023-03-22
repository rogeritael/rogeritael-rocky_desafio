import { AppLimiter } from "../../AppLimiter";
import { SkillsStyle } from "./styles";
import { skillsMock } from "../../../mocks/skills";

export function SkillsContainer(){
    return(
        
            <SkillsStyle>
                <AppLimiter>
                    <div className="skills_box">
                    <div className="skills_list_container">
                        <ul>
                            {
                                skillsMock.map(skill => (
                                    <li id={skill.id}>{skill.title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="skills_description_container">
                        <p className="skill_description">
                            Ao terminar o curso você saberá planejar e implementar uma estratégia de marketing digital
                             eficaz para alcançar os objetivos de negócios. Os alunos aprenderão a identificar o 
                             público-alvo, definir as metas, escolher as táticas corretas e avaliar os resultados.
                        </p>
                        <div className="button_container">
                            <button >TENHO INTERESSE</button>
                            <button className="purchase_now_button">COMPRE AGORA</button>
                        </div>
                    </div>
                    </div>
                </AppLimiter>
            </SkillsStyle>
    )
}