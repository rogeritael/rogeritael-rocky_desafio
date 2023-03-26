import { AppLimiter } from "../../AppLimiter";
import { Button } from "../../Button";
import { GoalCard } from "../../GoalCard";
import { MaisClientesContainer } from "./styles"

export function MaisClientesSection(){
    return(
        <AppLimiter>
        <MaisClientesContainer>
            <div className="left_side">
                <div className="mais_clientes_text_container">
                    <h1>Sem <br/> clientes?</h1>
                    <p className="subtitle">Veja como a Synapse vai te ajudar:</p>
                    <p className="description">
                        O curso de marketing digital da Synapse é uma oportunidade imperdível para aqueles
                        que desejam aprimorar suas habilidades de marketing e aumentar sua presença online.
                        
                        <br/><br/>
                        Durante o curso, você aprenderá tudo o que precisa saber sobre marketing nas
                        principais plataformas de mídia social, incluindo Facebook Ads, Google Ads e Instagram Ads.
                        
                    </p>
                </div>
                <div className="price_container">
                    <p className="price">R$ 5.000,00</p>
                    <div className="button_container">
                        <Button
                            background="transparent"
                            text="tenho interesse"
                        />
                        <Button
                            background="#F89D24"
                            text="comprar agora"
                        />
                    </div>
                </div>
            </div>
            <div className="right_side">
                <div className="mais_clientes_card_container">
                    <GoalCard
                        title="estratégias eficazes"
                        description="Você vai aprender as principais estratégias de marketing digital em plataformas como Facebook Ads, Google Ads."
                    />
                    <GoalCard
                        title="habilidades em criação de conteúdo"
                        description="Você desenvolverá a habilidade de criar conteúdo relevante e atraente para suas campanhas de marketing."
                    />
                    <GoalCard
                        title="Otimizar sites para mecanismos de busca"
                        description="Você terá acesso a técnicas avançadas de SEO para otimizar seus sites e aumentar sua visibilidade."
                    />
                    <GoalCard
                        title="Aumentar a sua presença online"
                        description="Você descobrirá como aumentar sua presença online para atrair mais visitantes e clientes em potencial."
                    />
                </div>
            </div>
            
        </MaisClientesContainer>
        </AppLimiter>
    );
}