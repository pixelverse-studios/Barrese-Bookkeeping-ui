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
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-gap: 1rem;

        .inputs {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }

        @media screen and (max-width: 1000px) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
        }
    }
`

export const StyledFaqItems = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .header {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
            color: var(--success-font);
        }
    }

    .items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 1rem;
    }
`

export const StyledFaqItem = styled.div`
    ${CardStyles}

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .buttons {
        .submit {
            color: var(--success-font);
        }
        .delete {
            color: var(--error-font);
        }

        .remove {
            color: tomato;
        }

        button svg {
            font-size: 1.8rem;
        }

        button:disabled > svg {
            color: gray;
        }

        .loader {
            height: 1.8rem !important;
            width: 1.8rem !important;
        }
    }
`

export const StyledModal = styled.div`
    width: 40vw;

    span {
        font-weight: 600;
    }
`
