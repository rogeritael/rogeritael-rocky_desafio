import { EducatorCardStyle } from "./styles";
import profile_img from '../../assets/profile.jpg';
import { AppLimiter } from "../AppLimiter";

export function EducatorCard(){
    return(
        <EducatorCardStyle>
                <div className="educator_profile">
                    <img src={profile_img} alt="imagem de perfil do professor" />
                </div>

                <div className="text_container">
                    <h2>Gabriela Oliveira,</h2>
                    <h2>Especialista em Conteúdo</h2>
                    <p>
                        Gabriela é apaixonada por criar conteúdo que engaja e conecta as pessoas. Ela tem 
                        anos de experiência em produção de conteúdo para web, e está empolgada para
                        compartilhar seus conhecimentos e técnicas com os alunos do curso de marketing digital.
                    </p>
                </div>
        </EducatorCardStyle>
    )
}