import styled from '@emotion/styled'

export const StyledAbout = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--Off-brand-color);
    .about-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0rem;
        .content {
            width: var(--max-desktop-width);
            padding: var(--content-padding);
            display: flex;
            flex-direction: column;
            align-items: center;
            h1 {
                font-size: 2.5rem;
            }

            .about {
                display: flex;
                column-gap: 1rem;
                padding-top: 2rem;
                .about-image-title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    float: left;
                    row-gap: 0.3rem;
                    img {
                        border-radius: 50%;
                    }
                }

                p {
                    display: grid;
                    place-items: center;
                }
            }
        }

        @media only screen and (max-width: 1350px) {
            .about {
                display: flex;
                flex-direction: column;
                p {
                    text-align: center;
                }
            }
        }
    }
`
