import styled from '@emotion/styled'

export const StyledDashboardPage = styled.section`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 20rem 1fr;
    gap: 1rem;

    .dashboardMain {
        display: grid;
        grid-template-rows: 5rem 1fr;

        .dashboardContent {
        }
    }
`

export const StyledDashboardSideNav = styled.nav`
    background-color: #1c2536;

    img {
        width: 12rem;
    }
`

export const StyledDashboardHeader = styled.header``
