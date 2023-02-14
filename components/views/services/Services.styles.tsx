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
            column-gap: 2rem;
            align-items: center;
            width: initial;

            img {
                height: 9rem;
                width: 9rem;
            }

            .service-info {
                border-left: 3px solid var(--Secondary-accent-color);
                padding-left: 2rem;

                h1 {
                    font-size: 2.5rem;
                }

                ul {
                    font-size: 1rem;
                    list-style-type: none;
                    display: grid;
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(350px, 1fr)
                    );
                    grid-template-rows: repeat(auto-fill, minmax(10px, 1fr));
                    row-gap: 0.4rem;
                    padding: 0;
                    li {
                        margin-left: 1.5rem;
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
                align-items: center;
                padding: 0 0 1rem 0;
                border-bottom: 3px solid var(--Secondary-accent-color);

                .service-info {
                    border-left: 3px solid transparent;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    row-gap: 1rem;

                    h1 {
                        border-bottom: 3px solid var(--Secondary-accent-color);
                        padding: 0;
                        margin: 0;
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
                        grid-template-rows: repeat(
                            auto-fill,
                            minmax(20px, 1fr)
                        );
                        row-gap: 0.64rem;
                        padding-bottom: 1rem;
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
