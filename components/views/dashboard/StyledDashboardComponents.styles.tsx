import styled from '@emotion/styled'

export const StyledDashboardPage = styled.section`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 16rem 1fr;

    .dashboardMain {
        display: grid;
        grid-template-rows: 6rem 1fr;
        grid-gap: 1rem 0;

        .dashboardContent {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 1400px;
            width: 100% #000;
        }
    }
`

export const StyledDashboardSideNav = styled.nav`
    background-color: #1c2536;
    display: grid;
    grid-template-rows: 6rem 1fr;
    gap: 1rem;

    .navHeader {
        padding: 1rem;
        display: flex;
        border-bottom: 2px solid var(--Primary-accent-color);

        img {
            width: 12rem;
            cursor: pointer;
        }
    }

    ul {
        padding: 1rem 1.5rem;

        li {
            margin: 1.5rem 0;

            a {
                transition: 0.2s ease-in-out;
                color: var(--Primary-accent-color);

                &:hover {
                    color: var(--Off-accent-color);
                }
            }

            &.active > a {
                color: var(--Off-brand-color);
            }

            &:nth-of-type(1) {
                margin-top: 0;
            }
        }
    }
`

export const StyledDashboardHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    padding: 1rem;
    border-bottom: 2px solid var(--Primary-accent-color);
    box-shadow: 0px 5px 6px 2px rgba(0, 0, 0, 0.28);

    button {
        svg {
            color: var(--Primary-brand-color);
        }
    }
`
