import styled from '@emotion/styled'
import CardStyles from '@/styles/components/StyledCard'

export const StyledFaqsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledFaqsContentForm = styled.form`
    ${CardStyles}

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .formContent {
        display: flex;
        gap: 1rem;

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`

export const StyledFaqItem = styled.div`
    ${CardStyles}
`
