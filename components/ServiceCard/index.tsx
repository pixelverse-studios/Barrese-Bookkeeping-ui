import { StyledServiceCard } from './ServiceCard.styles'
type ServiceCardProps = {
    imageSrc: string
    cardTitle: string
    cardDescription: string
}

const ServiceCard = ({
    imageSrc,
    cardTitle,
    cardDescription
}: ServiceCardProps) => {
    return (
        <StyledServiceCard>
            <img src={imageSrc} alt="get alt" />
            <h2>{cardTitle}</h2>
            <p>{cardDescription}</p>
        </StyledServiceCard>
    )
}

export default ServiceCard
