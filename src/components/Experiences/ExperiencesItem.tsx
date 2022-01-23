import { ItemContainer } from './styles'

interface ExperienceProps {
    year: string;
    title: string;
    description: string;
}

export default function ExperiencesItem({ year, title, description }: ExperienceProps){
    return (
        <ItemContainer>
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </ItemContainer>
    )
}