import { FooterStyle } from "./styles";
import { BsInstagram, BsWhatsapp, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

export function Footer(){
    return(
        <FooterStyle>
            <div className="socials">
                <BsInstagram />
                <BsWhatsapp />
                <BsTwitter />
                <FaFacebookF />
            </div>
            <p>Synapse &copy; Todos os direitos reservados</p>
            <ul>
                <li><a href="#"> Termos de uso</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Comunicar erro</a></li>
            </ul>
        </FooterStyle>
    );
}