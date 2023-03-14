import styled from '@emotion/styled'
import CardStyles from '@/styles/components/StyledCard'

export const StyledFaqsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`

export const StyledFaqsContentForm = styled.form`
    ${CardStyles}

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledFaqItem = styled.div`
    ${CardStyles}
`
