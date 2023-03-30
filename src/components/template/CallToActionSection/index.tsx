import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { CallToActionContainer } from "./styles";
import { ghostClick } from "../../../helpers/ghostClick";

export function CallToActionSection(){
    return(
        <CallToActionContainer>
        <AppLimiter>
            <h1 className="cta" data-aos="fade-up">
                Tome agora a decisão de transformar a sua empresa no mundo digital
            </h1>
            <div className="price_container" data-aos="fade-left">
                <p className="price">R$ 5.000,00</p>
                <Button
                    onClick={ghostClick}
                    text="fazer o curso"
                    background="#F89D24"
                />
            </div>
        </AppLimiter>
        </CallToActionContainer>
    )
}