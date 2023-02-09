import styled from '@emotion/styled'

export const PageContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    .container {
        width: min(100% - 4rem, 20rem);
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 3rem 0rem;
    }
`
