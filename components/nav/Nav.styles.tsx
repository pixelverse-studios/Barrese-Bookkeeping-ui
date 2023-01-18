import styled from '@emotion/styled'

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: var(--nav-height);
    background-color: white;
    color: black;
    .navContent {
        display: flex;
        gap: 1rem;
        align-items: center;
        .navRoutes {
            list-style-type: none;
            text-decoration: none;
            display: flex;
            gap: 1rem;
            text-transform: uppercase;
        }
    }
`

export default StyledNav
