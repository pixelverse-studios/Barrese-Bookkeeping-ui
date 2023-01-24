import styled from '@emotion/styled'

export const StyledFooter = styled.footer`
    width: 100%;
    padding: 55px 40px;
    height: fit-content;
    background-color: var(--footer-background);
    color: var(--footer-font-color);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .left-footer {
        display: flex;
        flex-direction: column;
        inline-size: 170px;
        overflow-wrap: break-word;
    }
    .center-footer {
        display: flex;
        justify-content: center;
        img {
            border-radius: 50%;
        }
    }
    .right-footer {
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
`
