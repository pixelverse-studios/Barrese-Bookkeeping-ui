import styled from '@emotion/styled'

export const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--Off-brand-color);

    .contact-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0rem;
        min-height: 70vh;
        .content {
            width: var(--max-desktop-width);
            padding: var(--content-padding);
            display: grid;
            grid-template-columns: 1fr 2fr;

            .logo-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                img {
                    width: 100%;
                }
            }
        }

        @media only screen and (max-width: 1350px) {
            padding: 0rem 1rem;
            height: fit-content;
            .content {
                width: 100vw;
                padding: 0rem;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 0.2fr 2fr;
                .logo-container {
                    align-items: center;
                    justify-content: flex-start;
                    img {
                        max-width: 50%;
                    }
                }
            }
        }
    }
`
