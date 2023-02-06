import styled from '@emotion/styled'

export const StyledServices = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--Off-brand-color);
    .hero-image {
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

    .services-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 4rem;
        }

        .services-hero {
            padding: 3.2rem 8rem;
            text-align: center;
            p {
                padding-top: 1.6rem;
                max-width: 80rem;
            }
        }

        .service-details {
            padding: 3.2rem 8rem;
            background-color: var(--Off-brand-color);
            display: flex;
            flex-direction: column;
            row-gap: 6.4rem;

            .detail-section {
                display: flex;
                column-gap: 3.2rem;
                align-items: center;
                width: var(--max-desktop-width);
                padding: var(--content-padding);
                img {
                    height: 15rem;
                    width: 15rem;
                }

                .service-info {
                    border-left: 3px solid var(--Secondary-accent-color);
                    padding-left: 3.2rem;

                    h1 {
                        font-size: 4rem;
                    }

                    ul {
                        font-size: 1.6rem;
                        list-style-type: none;
                        display: grid;
                        display: grid;
                        grid-template-columns: repeat(
                            auto-fill,
                            minmax(350px, 1fr)
                        );
                        grid-template-rows: repeat(
                            auto-fill,
                            minmax(10px, 1fr)
                        );
                        row-gap: 0.64rem;

                        padding: 1.6rem 0rem;
                        li {
                            margin-left: 2.4rem;
                            ::before {
                                content: '\\2713';
                                color: var(--Secondary-accent-color);
                                margin-left: -1.92rem;
                                padding-right: 0.8rem;
                            }
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1350px) {
        .detail-section {
            display: flex;
            flex-direction: column;
            row-gap: 1.6rem;
            align-items: center;

            width: var(--max-desktop-width);
            padding: var(--content-padding);
            img {
                height: 15rem;
                width: 15rem;
            }

            .service-info {
                border-top: 3px solid var(--Secondary-accent-color);
                border-left: 3px solid transparent !important;
                padding-left: 0 !important;
                display: flex;
                flex-direction: column;
                row-gap: 1.6rem;

                h1 {
                    text-align: center;
                    font-size: 4rem;
                }

                .description {
                    text-align: center;
                }

                ul {
                    font-size: 1.6rem;
                    list-style-type: none;
                    display: grid;
                    display: grid;
                    justify-items: start;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(200px, 1fr)
                    ) !important;
                    grid-template-rows: repeat(auto-fill, minmax(20px, 1fr));
                    row-gap: 0.64rem;
                    padding-bottom: 2.56rem;
                    li {
                        margin-left: 2.4rem;
                        ::before {
                            content: '\\2713';
                            color: var(--Secondary-accent-color);
                            margin-left: -1.92rem;
                            padding-right: 0.8rem;
                        }
                    }
                }
            }
        }
    } ;
`
