import { AppLimiter } from "../../AppLimiter";
import { SkillsStyle } from "./styles";
import { skillsMock } from "../../../mocks/skills";
import { ButtonContainer } from "../../ButtonContainer";

export function SkillsContainer(){
    return(
        
            <SkillsStyle>
                <AppLimiter>
                    {/* <div className="title"> */}
                        <h1 className="title">
                            O que você aprenderá
                        </h1>
                    {/* </div> */}

                    <div className="skills_box">
                    <div className="skills_list_container">
                        <ul>
                            {
                                skillsMock.map(skill => (
                                    <li id={skill.id}>
                                        <p>{skill.title}</p>
                                        {/* <div>{skill.content}</div> */}
                                    </li>

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
                    
                    <ButtonContainer />
                </AppLimiter>
            </SkillsStyle>
    )
}