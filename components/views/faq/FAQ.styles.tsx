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
            height: 100%;
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
    }

    .accordion {
        width: var(--max-desktop-width);
        padding: var(--content-padding);
        display: flex;
        flex-direction: column;

        .accordion-item {
            border-bottom: 1px solid var(--Secondary-accent-color);
        }

        button {
            position: relative;
            display: block;
            text-align: left;
            width: 100%;
            padding: 1rem 2rem;
            color: var(--Primary-brand-color);

            border: none;
            background: none;
            outline: none;
            &:hover,
            &:focus {
                cursor: pointer;
                color: $blue;
                &::after {
                    cursor: pointer;
                    color: $blue;
                    border: 1px solid $blue;
                }
            }
            .accordion-title {
                padding: 1rem 1.5rem 1rem 0;
                text-transform: uppercase;
                font-size: 1.2rem;
            }
            .icon {
                display: inline-block;
                position: absolute;
                top: 15px;
                left: 0;
                width: 22px;
                height: 22px;
                border: 1px solid;
                background-color: var(--off-brand-color);
                color: var(--Secondary-accent-color);
                transition: 0.5s ease-in-out;
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
                background-color: var(--Primary-brand-color);
                &::after {
                    width: 0;
                }
            }
            + .accordion-content {
                opacity: 1;
                max-height: 10rem;
                transition: all 200ms ease-in-out;
                will-change: opacity, max-height;
            }
        }
        .accordion-content {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 200ms ease-in-out, max-height 200ms ease-in-out;
            will-change: opacity, max-height;
            p {
                font-size: 1rem;
            }
        }
    }
`
