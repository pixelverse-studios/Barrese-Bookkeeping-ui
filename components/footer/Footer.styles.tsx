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
        display: flex;
        width: var(--max-desktop-width);
        padding: 0 5rem;
        align-items: center;
        justify-content: space-between;
        align-content: center;
        img {
            width: 15rem;
        }

        .contact {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            ul {
                list-style-type: none;
            }
            .social-links {
                display: flex;
                column-gap: 1rem;
            }
        }

        @media only screen and (max-width: 800px) {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 2rem;
            .left-footer {
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .center-footer {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .right-footer {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
`
