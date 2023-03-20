import { Button } from "../Button";
import { CoverContainer } from "./styles";

export function Cover(){
    return(
        <CoverContainer>
            
            <h1 className="call_to_action_title">
                Comece sua jornada de aprendizado hoje mesmo!
            </h1>
            <p className="cover_description_text">
                Aprenda no seu próprio ritmo com nossos cursos online de alta qualidade.
                Aproveite ao máximo seu potencial e alcance seus objetivos educacionais conosco.
            </p>

            <div className="button_container">
                <Button
                    text="tenho interesse"
                    background='transparent'
                />
                <Button
                    text="comprar agora" 
                    background='#F89D24' 
                />
            </div>
        </CoverContainer>
    );
}