import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    ${ContentSpacing}
    padding-bottom: 6rem;
    padding-top: 6rem;
    background-color: white;
    max-width: var(--max-content-width);

    .container {
        width: 100%;
        img {
            position: absolute;
            top: 0;
            left: 0px;
            right: 0px;
            margin: auto;
            z-index: 1;
            outline: 10px solid white;
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
                line-height: 24px;
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

    @media only screen and (max-width: 1350px) {
        width: 100%;
        .container .content {
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

    @media only screen and (max-width: 750px) {
        padding: 2rem;

        .container {
            img {
                top: -2rem;
            }
            .content {
                h1 {
                    font-size: 2rem;
                }
            }
        }
    }
`
