import styled from '@emotion/styled'

export const StyledAbout = styled.section`
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
    @media only screen and (max-width: 1350px) {
        width: 100%;
        padding: 0.5rem;
        text-align: center;
        .about {
            display: flex;
            flex-direction: column;
            p {
                text-align: center;
            }
        }
    }

    @media only screen and (max-width: 750px) {
        gap: 1rem;
        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.5rem;
        }

        .about {
            row-gap: 1rem;

            img {
                width: 100%;
            }
        }
    }
`
