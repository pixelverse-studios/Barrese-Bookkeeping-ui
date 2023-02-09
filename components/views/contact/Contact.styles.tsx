import styled from '@emotion/styled'

export const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--Off-brand-color);
    .hero {
        position: relative;
        height: 30vh;
        width: 100vw;
        background: linear-gradient(black, black),
            url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80')
                no-repeat center center/cover;
        background-blend-mode: saturation;
        .overlay {
            background-color: var(--Secondary-opaque-color);
            height: 30vh;
            width: 100%;
            color: var(--Off-brand-color);
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
        }
    }

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
    }

    @media only screen and (max-width: 1350px) {
        .contact-container {
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
