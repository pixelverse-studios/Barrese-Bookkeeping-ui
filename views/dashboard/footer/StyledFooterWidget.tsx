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

export const StyledFooterFields = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .addItem {
        margin-top: 1rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        cursor: pointer;

        svg {
            font-size: 1.5rem;
            color: var(--success-font);
        }

        p {
            margin-top: 3px;
        }
    }
`

export const StyledFooterField = styled.div`
    display: flex;
    width: 100%;

    .MuiAccordion-root {
        width: 100%;
    }
    .accordianSummary {
        width: 100%;

        .MuiAccordionSummary-content {
            display: flex;
            gap: 2rem;
            align-items: center;

            svg {
                font-size: 2rem;
            }

            span {
                font-size: 1rem;
                font-weight: 600;
                margin-top: 3px;
            }
        }
    }

    .accordianDetails {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .inputs {
            & > div {
                margin-right: 1rem;
            }

            & > div:nth-of-type(2) {
                width: 20rem;
            }

            .selectIcon {
                .MuiSelect-select {
                    padding: 0.8rem;
                    padding-right: 24px;
                }
            }
        }
        @media screen and (max-width: 1000px) {
            align-items: flex-start;

            .inputs {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                & > div {
                    margin-right: unset;
                }

                & > div:nth-of-type(1) {
                    width: 5rem;
                }
                & > div:nth-of-type(2) {
                    width: 15rem;
                }
            }
        }

        .deleteItem {
            cursor: pointer;
            transition: var(--transition);
            color: gray;

            &:hover {
                color: var(--error-font);
            }
        }
    }

    /* .instagram svg {
        background: radial-gradient(
            circle at 50% 100%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
        );
        color: white;
        border-radius: 5px;
    }

    .email svg {
        color: var(--Primary-brand-color);
    }

    .newIcon svg {
        color: gray;
    }

    .facebook svg {
        color: #4267b2;
    }

    .linkedin svg {
        color: #0077b5;
    }

    .reddit svg {
        color: #ff5700;
    }

    .twitter svg {
        color: #1da1f2;
    } */
`
