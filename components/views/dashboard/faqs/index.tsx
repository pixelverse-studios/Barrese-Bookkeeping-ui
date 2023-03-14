import FaqContentForm from './FaqContentForm'
import FaqItem from './FaqItem'
import { StyledFaqsContainer } from './StyledFAQsWidget'

const FaqsWidget = () => {
    return (
        <StyledFaqsContainer>
            <FaqContentForm />
            <FaqItem />
        </StyledFaqsContainer>
    )
}

export default FaqsWidget
