import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

type LandingPageTypes = {
    backgroundImg: string
}

export const StyledLanding = styled.section<LandingPageTypes>`
    width: 100vw;
    display: grid;
    grid-template-rows: 1fr auto;

    h1 {
        font-size: 6.4rem;
    }

    .hero {
        position: relative;
        height: 100vh;
        width: 100vw;
        background: ${props => `url(${props.backgroundImg})`};
        background-blend-mode: saturation;
        background-position: right;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0;

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
                bottom: 1rem;
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
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
                ${ContentSpacing}

                button {
                    width: 10rem;
                }

                .title-container {
                    max-width: 310px;
                    padding: 5px 0;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    width: fit-content;
                    gap: 1rem;
                    border-bottom: 3px solid var(--Off-brand-color);
                    padding: 1rem 0;

                    h1 {
                        font-size: 3rem;
                        line-height: 3.5rem;
                        color: var(--Off-brand-color);
                    }
                }

                .subtitle-container {
                    max-width: 310px;
                    display: flex;
                    flex-direction: column;

                    h2 {
                        margin-bottom: 1rem;
                        line-height: 1.7rem;
                    }
                    p {
                        line-height: 1.5rem;
                    }
                }
            }
        }

        @media only screen and (max-width: 750px) {
            background-position: center;

            .title-container {
                h1 {
                    font-size: 2.5rem;
                }

                h2 {
                    font-size: 2rem;
                }
            }

            .subtitle-container {
                h3 {
                    font-size: 1rem;
                }
            }
        }
    }

    .services {
        background-color: var(--Off-brand-color);
        ${ContentSpacing}
        padding: 3rem 0rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        row-gap: 1rem;
        scroll-margin-top: 2rem !important;

        h1 {
            font-size: 4.5rem;
            @media only screen and (max-width: 750px) {
                font-size: 3rem;
            }
        }

        .services-container {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: flex-start;
            justify-items: center;
            grid-gap: 1.5rem;
            padding: 2rem 6rem;
        }
    }

    @media only screen and (max-width: 1350px) {
        .hero {
            .overlay-text {
                justify-content: center;
                height: 100%;
                width: fit-content;
            }
        }
        .services {
            width: 100%;
            text-align: center;
            padding: 4rem 0rem;
            height: fit-content;
            scroll-margin-top: 7rem;

            .services-container {
                grid-template-columns: 1fr 1fr;
                padding: 2rem;
            }
        }
    }

    @media only screen and (max-width: 750px) {
        .services .services-container {
            grid-template-columns: 1fr;
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
