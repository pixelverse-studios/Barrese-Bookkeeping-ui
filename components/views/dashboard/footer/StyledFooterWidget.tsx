import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledFooterForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${CardStyles}

    .formHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
interface FooterFieldsTypes {
    color: string
}
export const StyledFooterFields = styled.div<FooterFieldsTypes>`
    .accordianSummary > .MuiAccordionSummary-content {
        display: flex;
        gap: 2rem;
        align-items: center;

        svg {
            font-size: 2rem;
            color: ${props => props.color || '#000'};
        }

        span {
            font-size: 1rem;
            font-weight: 600;
            margin-top: 3px;
        }
    }
`

export const StyledFooterField = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    span {
        font-size: 1rem;
        font-weight: 600;
        margin-top: 3px;
    }

    .inputs {
    }
`
