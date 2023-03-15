import FaqContentForm from './FaqContentForm'
import FaqItems from './FaqItems'
import { StyledFaqsContainer } from './StyledFAQsWidget'

const FaqsWidget = () => {
    return (
        <StyledFaqsContainer>
            <FaqContentForm />
            <FaqItems />
        </StyledFaqsContainer>
    )
}

export default FaqsWidget
