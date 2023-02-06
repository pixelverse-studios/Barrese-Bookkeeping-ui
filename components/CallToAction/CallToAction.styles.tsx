import styled from '@emotion/styled'

export const StyledCallToAction = styled.section`
    padding: 9.6rem 0rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;

    .footer-container {
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
            height: 15rem;
            width: 15rem;
        }

        .content {
            position: relative;
            border: 3px solid var(--Secondary-accent-color);
            width: 100%;
            min-width: fit-content;
            padding: 9.6rem 0rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            align-content: center;
            color: var(--Primary-brand-color);
            h1 {
                font-size: 6rem;
            }

            .subText {
                font-size: 2rem;
            }
        }

        button {
            width: 16rem;
            position: absolute;
            bottom: 75px;
            left: 0px;
            right: 0px;
            margin: auto;
            z-index: 1;
            outline: 10px solid white;
            padding: 1.6rem 3.2rem;
        }
    }
`
