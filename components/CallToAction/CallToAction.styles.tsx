import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    padding: 6rem 0rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        width: var(--max-desktop-width);
        padding: var(--content-padding);
        img {
            position: absolute;
            top: 25px;
            left: 0px;
            right: 0px;
            margin: auto;
            z-index: 1;
            outline: 10px solid white;
            border-radius: 50%;
            height: 9.375rem;
            width: 9.375rem;
        }

        .content {
            position: relative;
            border: 3px solid var(--Secondary-accent-color);
            width: 100%;
            min-width: fit-content;
            padding: 6rem 0rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            align-content: center;
            color: var(--Primary-brand-color);
            h1 {
                font-size: 3.75rem;
            }

            .subText {
                font-size: 1.25rem;
            }
            @media only screen and (max-width: 750px) {
                h1 {
                    font-size: 3rem;
                    padding: 0 1.5rem;
                }
                .subText {
                    font-size: 1rem;
                }
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
        width: 100%;
    }
`
