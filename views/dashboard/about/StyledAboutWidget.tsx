import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledAboutForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 4rem;
    grid-gap: 1rem;

    @media screen and (max-width: 1300px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1.5fr;
    }
`

export const StyledAboutFields = styled.div`
    ${CardStyles}
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: fit-content;
`

export const StyledBackgroundInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .inputWrapper {
        ${CardStyles}
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
        height: fit-content;

        div:nth-of-type(1) {
            width: 100%;
        }

        .icons {
            .submit {
                color: var(--success-font);
            }

            .wipe {
                color: var(--error-font);
            }

            button:disabled {
                svg {
                    color: lightgray;
                }
            }
        }
    }

    ul {
        flex: 2;
        overflow: auto;
        max-height: 360px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;

        li {
            ${CardStyles}
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            height: fit-content;
            line-height: 20px;

            .icons {
                .edit {
                    color: var(--Off-accent-color);
                }

                .delete {
                    color: var(--error-font);
                }
            }
        }
    }
`
