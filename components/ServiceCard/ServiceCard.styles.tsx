import styled from '@emotion/styled'

export const StyledServiceCard = styled.div`
    display: grid;
    grid-template-rows: auto 4rem 1fr;
    grid-gap: 1.5rem;
    align-items: flex-start;
    justify-items: center;

    img {
        width: 80%;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        text-align: center;
        line-height: 24px;
        font-size: 1.1rem;
    }
`
