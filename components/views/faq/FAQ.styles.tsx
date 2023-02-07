import styled from '@emotion/styled'

export const StyledFAQ = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;

    .hero {
        position: relative;
        height: 30vh;
        width: 100vw;
        background: linear-gradient(black, black),
            url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80')
                no-repeat center center/cover;
        background-blend-mode: saturation;
        .overlay {
            background-color: var(--Secondary-opaque-color);
            height: 30vh;
            width: 100%;
            color: var(--Off-brand-color);
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
        }
    }

    .FAQ-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0rem;
        h1 {
            font-size: 2.5;
        }
        h2 {
            font-size: 1.25rem;
        }
    }

    .accordion {
        width: var(--max-desktop-width);
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
            }
        }
        .accordion-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 200ms linear, max-height 200ms linear;
            will-change: opacity, max-height;
            p {
                font-size: 1rem;
                font-weight: 300;
                margin: 2em 0;
            }
        }
    }
`
