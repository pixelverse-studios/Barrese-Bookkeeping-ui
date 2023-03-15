import ServiceContentForm from './ServiceContentForm'
import ServiceItems from './ServiceItems'
import { StyledServicesContainer } from './StyledServicesWidget'

const ServicesWidget = () => {
    return (
        <StyledServicesContainer>
            <ServiceContentForm />
            <ServiceItems />
        </StyledServicesContainer>
    )
}

export default ServicesWidget
