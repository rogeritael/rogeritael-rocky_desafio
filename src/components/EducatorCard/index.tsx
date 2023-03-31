import { EducatorCardStyle } from "./styles";

interface EducatorCardProps {
    name: string,
    photo: string,
    title: string,
    description: string,
}

export function EducatorCard({ name, photo, title, description }: EducatorCardProps){
    return(
        <EducatorCardStyle>
                <div className="educator_profile">
                    <img src={photo} alt="imagem de perfil do professor" />
                </div>

                <div className="text_container">
                    <h2>{name},</h2>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
        </EducatorCardStyle>
    )
}