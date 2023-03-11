import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledLandingWidgtForm = styled.form`
    ${CardStyles}

    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-gap: 1rem;
`

export const StyledLandingFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
