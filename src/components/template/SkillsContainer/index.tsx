import { useState } from "react";
import { skillsMock } from "../../../mocks/skills";
import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { ButtonContainer } from "../../ButtonContainer";
import { SkillsStyle } from "./styles";

export function SkillsContainer(){
    const [content, setContent] = useState(skillsMock[0].content);

    function handleClick(content: string){
        setContent(content);
    }

    return(
        <SkillsStyle>
            <AppLimiter>
                <h1>O que você vai Aprender</h1>
                <div className="skills">
                    <div className="header">
                        {
                            skillsMock.map((skill) => (
                                <div className="single_skill">
                                    <h2 onClick={() => handleClick(skill.content)}>{skill.title}</h2>
                                    <p className="description">{skill.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="body">
                        <p>{content}</p>
                        <div className="buttons">
                            <input type="button" value="TENHO INTERESSE" />
                            <input type="button" value="COMPRAR AGORA" />
                        </div>
                    </div>
                </div>
                <ButtonContainer openModal={() => alert()} />
            </AppLimiter>
        </SkillsStyle>
    )
}