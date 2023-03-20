import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    padding: 6rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    max-width: calc(var(--max-content-width) - var(--content-padding));

    .container {
        width: 100%;

        .ctaImgWrapper {
        }
        img {
            position: absolute;
            top: 0;
            left: 0px;
            right: 0px;
            margin: auto;
            z-index: 1;
            outline: 10px solid white;
            border-radius: 50%;
            height: 9.375rem;
            width: 9.375rem;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
        }

        .content {
            border: 3px solid var(--Secondary-accent-color);
            padding: 6rem 0rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            color: var(--Primary-brand-color);

            h1 {
                font-size: 3.75rem;
            }

            .subText {
                font-size: 1.25rem;
            }
        }

        button {
            width: 10rem;
            position: absolute;
            bottom: 75px;
            left: 0px;
            right: 0px;
            margin: auto;
            z-index: 1;
            outline: 10px solid white;
            padding: 1rem 2rem;
        }
    }

    @media only screen and (max-width: 750px) {
        .container {
            .content {
                text-align: center;
                padding: 6rem 4rem;

                h1 {
                    font-size: 3rem;
                    padding: 0 1.5rem;
                }
                .subText {
                    font-size: 1rem;
                }
            }
        }
    }
`
