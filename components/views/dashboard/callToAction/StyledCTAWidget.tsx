import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledCtaForm = styled.form`
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-gap: 1rem;
    ${CardStyles}
`

export const StyledCtaFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
