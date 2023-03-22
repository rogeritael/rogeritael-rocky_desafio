import { FooterStyle } from "./styles";

export function Footer(){
    return(
        <FooterStyle>
            <div className="socials">

            </div>
            <p>Synapse Todos os direitos reservados</p>
            <ul>
                <li><a href="#"> Termos de uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Comunicar erro</a></li>
            </ul>
        </FooterStyle>
    );
}