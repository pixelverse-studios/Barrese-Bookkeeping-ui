import styled from '@emotion/styled'

export const StyledServices = styled.section`
    width: 100%;

    .services-hero {
        display: flex;
        flex-direction: column;
        align-items: center;
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

        p {
            padding-top: 1rem;
            max-width: 50rem;
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
            align-items: flex-start;
            gap: 2rem;

            img {
                width: 9rem;
                height: 100%;
            }

            .service-info {
                border-left: 1px solid var(--Secondary-accent-color);
                padding-left: 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: flex-start;
                line-height: 24px;

                h1 {
                    font-size: 2rem;
                    font-weight: 600;
                }

                span {
                    text-align: left;
                }

                ul {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
                    justify-items: flex-start;
                    grid-gap: 1rem;
                    width: 100%;

                    li {
                        margin-left: 1.5rem;
                        text-align: left;

                        ::before {
                            content: '\\2713';
                            color: var(--Secondary-accent-color);
                            margin-left: -1.2rem;
                            padding-right: 0.5rem;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 1350px) {
        width: 100%;
        padding: 0.5rem;
        text-align: center;

        .service-details {
            padding: 1rem;

            .detail-section {
                flex-direction: column;
                row-gap: 1.6rem;
                align-items: flex-start;
                padding: 0 0 1rem 0;
                border-bottom: 3px solid var(--Secondary-accent-color);

                .service-info {
                    border-left: 3px solid transparent;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    row-gap: 1rem;

                    h1 {
                        padding: 0;
                        margin: 0;
                    }

                    ul {
                        li {
                            margin-left: 2.4rem;
                            font-size: 1rem;
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
    } ;
`
