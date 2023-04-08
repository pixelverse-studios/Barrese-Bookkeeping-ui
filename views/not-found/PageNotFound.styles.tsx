import styled from '@emotion/styled'

export const Styled404Page = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 2rem;

    .visual {
        @keyframes loading-left {
            0% {
                transform: translateX(-15%);
                opacity: 5%;
            }

            50% {
                transform: translateX(0%);
                opacity: 100%;
            }
            100% {
                transform: translateX(-15%);
                opacity: 5%;
            }
        }
        @keyframes loading-right {
            0% {
                transform: translateX(15%);
                opacity: 5%;
            }

            50% {
                transform: translateX(0%);
                opacity: 100%;
            }

            100% {
                transform: translateX(15%);
                opacity: 5%;
            }
        }
        @keyframes loading-dot {
            0% {
                opacity: 5%;
            }

            50% {
                opacity: 100%;
            }

            100% {
                opacity: 5%;
            }
        }

        /* .loading-box { */
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        path:nth-of-type(1) {
            animation: loading-left 3s ease-in-out infinite;
        }

        path:nth-of-type(2) {
            animation: loading-right 3s ease-in-out infinite;
        }
        .loader {
            height: fit-content;
            display: flex;
            flex-direction: row;
            column-gap: 1rem;
            div {
                height: 25px;
                width: 25px;
                border-radius: 50%;
            }

            div:nth-of-type(1) {
                background-color: #2359a6;
                animation: loading-dot 3s ease-in-out infinite;
            }
            div:nth-of-type(2) {
                background: linear-gradient(
                    90deg,
                    rgba(35, 89, 166, 1) 0%,
                    rgba(10, 152, 220, 1) 100%
                );
                animation: loading-dot 3s ease-in-out infinite;
                animation-delay: 0.3s;
            }
            div:nth-of-type(3) {
                background-color: #0a98dc;
                animation: loading-dot 3s ease-in-out infinite;
                animation-delay: 0.6s;
            }
        }
    }
    .message {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: center;
        align-items: center;

        span {
            /* font-family: 'Source Code Pro', monospace; */
            font-size: 5rem;
        }

        p {
            font-size: 1.5rem;
            font-weight: 500;
        }

        button {
            cursor: pointer;
            width: fit-content;
            font-size: 1.5rem;
            padding: 1rem;
            border-radius: 30px;
            border: 3px solid var(--Secondary-opaque-color);
            background-color: var(--Primary-brand-color);
            color: var(--Off-brand-color);
            transition: 0.5s ease-in-out;

            &:hover {
                background-color: var(--Off-brand-color);
                color: var(--Primary-brand-color);
            }
        }
    }
`
