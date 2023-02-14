import styled from '@emotion/styled'

export const StyledPageContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .container {
        max-width: 1800px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0rem;

        @media only screen and (max-width: 1350px) {
            width: 100%;
        }
    }
`
