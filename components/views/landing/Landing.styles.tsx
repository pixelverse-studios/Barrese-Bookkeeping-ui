import styled from '@emotion/styled'

export const StyledLanding = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 6.4rem;
    }
    .hero {
        position: relative;
        height: 100vh;
        width: 100vw;
        background: linear-gradient(black, black),
            url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80')
                no-repeat center center/cover;
        background-blend-mode: saturation;

        .overlay {
            background-color: var(--Secondary-opaque-color);
            height: 100%;
            width: 100%;
            color: var(--Off-brand-color);
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
            .overlay-text {
                width: var(--max-desktop-width);
                padding: var(--content-padding);
                padding-top: var(--nav-height);
            }
            .title-container {
                display: flex;
                flex-direction: column;
                width: fit-content;
                border-bottom: 3px solid var(--Off-brand-color);
                padding-bottom: 1.6rem;
                h1 {
                    color: var(--Off-brand-color);
                }

                h2 {
                    font-size: 4.8rem;
                }
            }

            .subtitle-container {
                display: flex;
                flex-direction: column;
                padding: 1rem 0rem;
                span:nth-of-type(1) {
                    font-size: 2.08rem;
                }
                span:nth-of-type(2) {
                    font-size: 2.08rem;
                }
            }
        }
    }

    .services {
        background-color: var(--Off-brand-color);
        width: 100%;
        height: calc(100vh - var(--nav-height));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        padding: 4.8rem 0rem;

        .services-container {
            display: flex;
            justify-content: space-between;
            width: var(--max-desktop-width);
            padding: var(--content-padding);
            padding-top: var(--nav-height);
        }
    }

    @media only screen and (max-width: 1350px) {
        .overlay {
            display: flex;

            .overlay-text {
                display: flex;
                align-content: center;
                flex-direction: column;
                align-items: flex-start;
                height: 100%;
                width: 100%;
                justify-content: center;
                padding-left: 2.6rem;
            }
        }
        .services {
            background-color: var(--Secondary-accent-color);
            width: 100%;
            text-align: center;
            padding: 4.8rem 0rem;
            height: fit-content;

            .services-container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    } ;
`
