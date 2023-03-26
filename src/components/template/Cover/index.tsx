import { Button } from "../../Button";
import { CoverContainer } from "./styles";

import logo from '../../../assets/logo_synapse.png';
import { AppLimiter } from "../../AppLimiter";

export function Cover(){
    return(
        <CoverContainer>
            <AppLimiter className="limiter">
            
            
            <img src={logo} className="logo" alt="Logo" />

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
        </AppLimiter>
        </CoverContainer>
    );
}