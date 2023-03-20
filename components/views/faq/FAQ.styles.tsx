import styled from '@emotion/styled'

export const StyledFAQ = styled.section`
    text-align: center;

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 0.7rem;
    }

    h2 {
        font-size: 1.8rem;
        font-weight: 600;
    }

    .accordion {
        width: var(--max-content-width);
        padding: var(--content-padding);
        display: flex;
        flex-direction: column;
        .accordion-item {
            border-bottom: 1px solid var(--Secondary-accent-color);
            button[aria-expanded='true'] {
                border-bottom: 1px solid var(--Secondary-accent-color);
            }
        }
        button {
            position: relative;
            display: block;
            text-align: left;
            width: 100%;
            padding: 1rem 2rem;
            color: var(--Primary-brand-color);
            font-size: 0.9rem;
            font-weight: 400;
            border: none;
            background: none;
            outline: none;
            &:hover,
            &:focus {
                cursor: pointer;
                &::after {
                    cursor: pointer;
                    border: 1px solid var(--Primary-brand-color);
                }
            }
            .accordion-title {
                padding: 1rem 1.5rem 1rem 0;
                text-transform: uppercase;
            }
            .icon {
                display: inline-block;
                position: absolute;
                top: 12px;
                left: 0;
                width: 22px;
                height: 22px;
                border: 1px solid;
                background-color: var(--off-brand-color);
                color: var(--Secondary-accent-color);
                transition: 0.4s linear;
                &::before {
                    display: block;
                    position: absolute;
                    content: '';
                    top: 9px;
                    left: 5px;
                    width: 10px;
                    height: 2px;
                    background: currentColor;
                }
                &::after {
                    display: block;
                    position: absolute;
                    content: '';
                    top: 5px;
                    left: 9px;
                    width: 2px;
                    height: 10px;
                    background: currentColor;
                }
            }
            &:hover {
                .icon {
                    background-color: var(--Primary-brand-color);
                }
            }
        }
        button[aria-expanded='true'] {
            color: var(--Primary-brand-color);
            .icon {
                &::after {
                    width: 0;
                }
            }
            + .accordion-content {
                opacity: 1;
                max-height: 9em;
                transition: all 200ms linear;
                will-change: opacity, max-height;
                text-align: start;
                @media only screen and (max-width: 1350px) {
                    padding: 1rem 0;
                    max-height: fit-content;
                }
            }
        }
        .accordion-content {
            text-align: start;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 200ms linear, max-height 200ms linear;
            will-change: opacity, max-height;

            p {
                font-size: 1rem;
                font-weight: 300;
                margin: 2rem 0;
                line-height: 24px;

                @media only screen and (max-width: 1350px) {
                    margin: 0 0;
                    text-align: start;
                }
            }
        }
        @media only screen and (max-width: 1350px) {
            width: 100%;
            padding: 0.5rem;
            text-align: center;
        }
    }
`
