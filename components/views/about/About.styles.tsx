import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

export const StyledAbout = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 2.5rem;
        padding: 1rem 0;
        font-weight: 700;
        margin-bottom: 0.7rem;
    }

    h2 {
        text-align: center;
        font-size: 1.8rem;
        font-weight: 600;
    }

    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding-top: 2rem;

        .about-image-title {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
            align-items: center;

            img {
                border-radius: 50%;
            }

            span {
                font-size: 1.2rem;
                font-weight: 700;
            }
        }

        p {
            width: 50%;
            margin: auto;
            line-height: 24px;
            font-size: 1.1rem;
            text-align: justify;
        }
    }

    @media only screen and (max-width: 1350px) {
        .about p {
            width: 80%;
        }
    }

    @media only screen and (max-width: 750px) {
        .about {
            .about-image-title img {
                width: 65%;
            }

            p {
                width: 90%;
            }
        }
    }
`
