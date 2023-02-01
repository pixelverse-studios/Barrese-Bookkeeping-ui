import styled from '@emotion/styled'

export const StyledServices = styled.section`
    @counter-style checks {
        system: cyclic;
        symbols: '✅';
        suffix: ' ';
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--Off-brand-color);
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
    .services-hero {
        padding: 2rem 5rem;
        text-align: center;
        p {
            padding-top: 1rem;
            max-width: 800px;
        }
    }

    .service-details {
        padding: 2rem 5rem;
        background-color: var(--Off-brand-color);
        display: flex;
        flex-direction: column;
        row-gap: 4rem;

        .detail-section {
            display: flex;
            column-gap: 2rem;
            align-items: center;
            img {
                height: 150px;
                width: 150px;
            }

            .service-info {
                border-left: 3px solid black;
                padding-left: 2rem;
                h1 {
                    font-size: 40px;
                }

                ul {
                    font-size: 1rem;
                    list-style-type: checks;
                    display: grid;
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(600px, 1fr)
                    );
                    grid-template-rows: repeat(auto-fill, minmax(10px, 1fr));
                    row-gap: 0.4rem;
                    padding-bottom: 1rem;
                    li {
                        margin-left: 1.5rem;
                    }
                }
            }
        }
    }
`
