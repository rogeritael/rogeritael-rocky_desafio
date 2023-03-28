import { ButtonContainer } from "./styles";

interface ButtonProps {
    text: string,
    background: '#F89D24' | 'transparent',
    onClick: () => void,
}

export function Button({text, background, onClick}: ButtonProps){
    return(
        <ButtonContainer background={background} onClick={() => onClick()}>
            {text.toUpperCase()}
        </ButtonContainer>
    );
}