import styled from '@emotion/styled'

export const StyledLanding = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 4rem;
    }
    .hero {
        position: relative;
        height: 100vh;
        width: 100vw;
        background: url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80')
            no-repeat center center/cover;
        .overlay {
            background-color: #1a34a96c;
            height: 100%;
            width: 100%;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
            .overlay-text {
                width: var(--max-desktop-width);
                padding: 0 5rem;
                padding-top: var(--nav-height);
            }

            .title-container {
                display: flex;
                flex-direction: column;
                width: fit-content;
                border-bottom: 3px solid white;
                padding-bottom: 1rem;
                span:nth-of-type(1) {
                    font-size: 4rem;
                }
                span:nth-of-type(2) {
                    font-size: 4rem;
                }
                span:nth-of-type(3) {
                    font-size: 3rem;
                }
            }

            .subtitle-container {
                display: flex;
                flex-direction: column;
                padding: 1rem 0rem;
                span:nth-of-type(1) {
                    font-size: 1.8rem;
                }
                span:nth-of-type(2) {
                    font-size: 1.8rem;
                }
            }
        }
    }

    .services {
        background-color: #3e00f7b8;
        width: 100%;
        text-align: center;
        padding: 5rem 0rem;

        .services-container {
            display: flex;
            justify-content: space-evenly;
        }
    }
`
