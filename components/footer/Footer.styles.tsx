import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 5rem 0rem;
    background-color: var(--footer-background);
    color: var(--footer-font-color);
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-content {
        width: var(--max-content-width);
        padding: var(--content-padding);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        grid-gap: 1rem;

        .logoContainer {
            height: 100%;

            img {
                width: 15rem;
            }
        }

        .contact {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 1rem;

            h3 {
                margin-bottom: 1.2rem;
                font-weight: bold;
                font-size: 1.25rem;
            }

            span {
                font-size: 1rem;
                font-weight: 600;
            }

            .social-links {
                display: flex;
                column-gap: 1rem;
            }
        }
    }
    @media only screen and (max-width: 1350px) {
        display: flex;
        .footer-content {
            display: flex;
            flex-direction: column;
            width: var(--max-content-width);
            padding: var(--content-padding);
            align-items: center;
            justify-content: center;
            align-content: center;
        }
        .contact {
            width: 100%;
            display: flex;
            align-items: center !important;
            .social-links {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            .copyright {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }
`
