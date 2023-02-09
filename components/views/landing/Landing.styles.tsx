import styled from '@emotion/styled'

export const StyledLanding = styled.section`
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
            .downArrows {
                position: absolute;
                bottom: 4rem;
                height: 50px;
                width: 50px;
                display: grid;
                place-items: center;
                cursor: pointer;
                .arrow {
                    display: inline-block;
                    width: 50%;
                    height: 50%;
                    position: absolute;
                    top: 0;
                    border: solid #eee;
                    border-width: 0 5px 5px 0;
                    transform: rotate(45deg);
                }
                span:nth-of-type(2) {
                    animation: down1 1.6s ease-in infinite;
                }
                span:nth-of-type(3) {
                    animation: down2 1.6s ease-in infinite;
                }
            }
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
                padding-bottom: 1rem;
                h1 {
                    font-size: 5rem;
                    color: var(--Off-brand-color);
                }

                h2 {
                    font-size: 3rem;
                }
            }

            .subtitle-container {
                display: flex;
                flex-direction: column;
                padding: 1rem 0rem;
                span:nth-of-type(1) {
                    font-size: 1.3rem;
                }
                span:nth-of-type(2) {
                    font-size: 1.3rem;
                }
            }
            @media only screen and (max-width: 1350px) {
                display: flex;
                .overlay-text {
                    display: flex;
                    align-content: center;
                    flex-direction: column;
                    align-items: center;
                    height: 100%;
                    width: fit-content;
                    justify-content: center;
                    padding: 0;
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
        padding: 3rem 0rem;
        scroll-margin-top: 2rem !important;
        h1 {
            font-size: 4.5rem;
        }

        .services-container {
            display: flex;
            justify-content: space-between;
            width: var(--max-desktop-width);
            padding: var(--content-padding);
            padding-top: 3rem;
        }

        @media only screen and (max-width: 1350px) {
            width: 100%;
            text-align: center;
            padding: 3rem 0rem;
            height: fit-content;
            scroll-margin-top: 7rem;

            .services-container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }

    //animations
    @keyframes down1 {
        to {
            opacity: 0;
            top: 60%;
        }
    }
    @keyframes down2 {
        to {
            opacity: 0;
            top: 120%;
        }
    }
`
