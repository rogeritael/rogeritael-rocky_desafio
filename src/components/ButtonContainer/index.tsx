import { ghostClick } from "../../helpers/ghostClick";
import { Button } from "../Button";
import { ButtonContainerStyle } from "./styles";

interface ButtonProps {
    openModal: () => void,
}

export function ButtonContainer({ openModal }: ButtonProps){

    return(
        <ButtonContainerStyle className="button_container">
            <Button
                text="tenho interesse"
                background='transparent'
                onClick={() => openModal()}
            />
            <Button
                onClick={() => ghostClick()}
                text="comprar agora" 
                background='#F89D24' 
            />
        </ButtonContainerStyle>
    )
}