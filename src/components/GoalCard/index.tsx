import image from '../../assets/goal_image.png'
import { GoalCardContainer } from './styles';

interface GoalCardProps {
    title: string;
    description: string;
}

export function GoalCard({ title, description }: GoalCardProps){
    return(
        <GoalCardContainer>
            <img src={image} alt='metodologias' />
            <h4>{title.toUpperCase()}</h4>
            <p>{description}</p>
        </GoalCardContainer>
    )
}