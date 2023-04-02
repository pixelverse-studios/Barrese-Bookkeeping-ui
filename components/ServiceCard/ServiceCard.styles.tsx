import styled from '@emotion/styled'

export const StyledServiceCard = styled.div`
    display: grid;
    grid-template-rows: 10rem 4rem 1fr;
    grid-gap: 2rem;
    justify-items: center;
    align-items: flex-start;

    img {
        width: 8rem;
        margin: auto;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
        text-align: center;
    }

    p {
        text-align: center;
        line-height: 24px;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 750px) {
        p,
        h2 {
            padding: 0 2rem;
        }
    }
`
