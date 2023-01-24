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
        </StyledServiceCard>
    )
}

export default ServiceCard
