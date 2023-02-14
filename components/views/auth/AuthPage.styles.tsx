import styled from '@emotion/styled'

export const StyledAuthPage = styled.section`
    display: grid;
    place-items: center;
    height: calc(100vh - var(--nav-height) - var(--footer-height));

    * {
        font-size: 16px;
    }

    .formContainer {
        height: fit-content;
        padding: 2rem;
        display: grid;
        grid-template-rows: auto auto;
        grid-gap: 1.5rem;
        width: 30rem;

        .header {
            text-align: center;
        }

        .success {
            padding: 1rem;
        }

        .error {
            padding: 1rem;
        }

        fieldset {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            small {
                margin-bottom: 1rem;
            }

            /* label {
                font-size: 1.5rem;
            } */

            .option {
                text-align: center;
                .forgotPw {
                    &:hover {
                        text-decoration: underline;
                    }
                }

                .signIn {
                    font-weight: 600;
                    font-size: 0.9rem;
                    text-align: center;
                    padding-bottom: 0.5rem 0;
                    text-decoration: underline;
                }
            }
        }
    }
`
