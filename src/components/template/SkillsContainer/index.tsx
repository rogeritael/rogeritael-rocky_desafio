import { useState } from "react";
import { skillsMock } from "../../../mocks/skills";
import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { ButtonContainer } from "../../ButtonContainer";
import { SkillsStyle } from "./styles";

interface onClickProps {
    content: string,
    id: number,
}

interface SkillsContainerProps {
    openModal: () => void,
}

export function SkillsContainer({ openModal }: SkillsContainerProps){
    const [content, setContent] = useState(skillsMock[0].content);
    const [activeSkill, setActiveSkill] = useState(1);

    function handleClick({content, id}: onClickProps){
        setContent(content);
        setActiveSkill(id)
    }

    return(
        <SkillsStyle>
            <AppLimiter>
                <h1>O que você vai Aprender</h1>
                <div className="skills">
                    <div className="header">
                        {
                            skillsMock.map((skill) => (
                                <div className={`single_skill ${skill.id === activeSkill ? 'active' : ''} `}>
                                    <h2 onClick={() => handleClick({content: skill.content, id: skill.id})}>{skill.title}</h2>
                                    {skill.id === activeSkill &&(
                                        <p className="description">{skill.content}</p>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                    <div className="body">
                        <p>{content}</p>
                        <div className="buttons">
                            <input type="button" onClick={() => openModal()} value="TENHO INTERESSE" />
                            <input type="button" value="COMPRAR AGORA" />
                        </div>
                    </div>
                </div>
                <ButtonContainer openModal={() => openModal()} />
            </AppLimiter>
        </SkillsStyle>
    )
}