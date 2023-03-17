import styled from '@emotion/styled'
import CardStyles from '@/styles/components/StyledCard'

export const StyledServicesContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const StyledServicesContentForm = styled.form`
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
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }
`

export const StyledServiceOfferings = styled.section`
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
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;

        @media screen and (max-width: 1400px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export const StyledServiceOffering = styled.div`
    ${CardStyles}

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .serviceOfferingIconFile {
        margin: auto;
    }

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

export const StyledOfferingBullet = styled.div`
    .newBulletRow {
        display: grid;
        grid-template-columns: 1fr 4rem;
        grid-gap: 1rem;
        padding: 8px 0;

        button {
            position: relative;
            top: 0.8rem;

            svg {
                color: var(--success-font);
            }
            &:disabled {
                svg {
                    color: gray;
                }
            }
        }
    }

    .bulletsContainer {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 1rem;

        li {
            border-bottom: 2px solid lightgray;
        }

        button svg {
            color: var(--error-font);
        }

        @media screen and (max-width: 1000px) {
            grid-template-rows: 1fr;
            grid-template-columns: 1fr;
        }
    }
`

export const StyledModal = styled.div`
    width: 40vw;

    span {
        font-weight: 600;
    }
`
