import { ButtonContainer } from "./styles";

interface ButtonProps {
    text: string,
    background: '#F89D24' | 'transparent'
}

export function Button({text, background}: ButtonProps){
    return(
        <ButtonContainer background={background}>
            {text.toUpperCase()}
        </ButtonContainer>
    );
}