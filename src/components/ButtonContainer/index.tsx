import { Button } from "../Button";
import { ButtonContainerStyle } from "./styles";

export function ButtonContainer(){
    return(
        <ButtonContainerStyle className="button_container">
            <Button
                text="tenho interesse"
                background='transparent'
            />
            <Button
                text="comprar agora" 
                background='#F89D24' 
            />
        </ButtonContainerStyle>
    )
}