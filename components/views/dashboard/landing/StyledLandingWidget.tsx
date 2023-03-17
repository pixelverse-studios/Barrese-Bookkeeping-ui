import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledLandingWidgtForm = styled.form`
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-template-rows: 1fr 4rem;
    grid-gap: 1rem;

    @media screen and (max-width: 1000px) {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
    }
`

export const StyledLandingFields = styled.div`
    ${CardStyles}

    display: flex;
    flex-direction: column;
    gap: 1rem;
`
