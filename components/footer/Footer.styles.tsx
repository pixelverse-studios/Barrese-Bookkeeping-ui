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
        padding: var(--content-padding);
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
    }
    @media only screen and (max-width: 1350px) {
        display: flex;
        .footer-content {
            display: flex;
            flex-direction: column;
            width: var(--max-desktop-width);
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
