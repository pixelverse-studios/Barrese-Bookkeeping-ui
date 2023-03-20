import styled from '@emotion/styled'

export const StyledContact = styled.section`
    .content {
        width: var(--max-content-width);
        padding: var(--content-padding);
        display: grid;
        grid-template-columns: 1fr 2fr;

        .logo-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img {
                width: 100%;
            }
        }
    }

    @media only screen and (max-width: 1350px) {
        padding: 0rem 1rem;
        height: fit-content;
        .content {
            width: 100vw;
            padding: 0rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.2fr 2fr;
            .logo-container {
                align-items: center;
                justify-content: flex-start;
                img {
                    max-width: 50%;
                }
            }
        }
    }
`
