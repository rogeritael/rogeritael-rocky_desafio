import { Button } from "../Button";
import { CallToActionContainer } from "./styles";

export function CallToActionSection(){
    return(
        <CallToActionContainer>
            <h1 className="cta">
                Tome a decisão agora de transformar a sua empresa no digital
            </h1>
            <div className="price_container">
                <p className="price">R$ 5.000,00</p>
                <Button
                    text="fazer o curso"
                    background="#F89D24" ///COLOCAR WHITE
                />
            </div>
        </CallToActionContainer>
    )
}