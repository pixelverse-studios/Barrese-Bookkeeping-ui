import styled from '@emotion/styled'

export const StyledLanding = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    row-gap: 2rem;
    h1 {
        font-size: 3rem;
    }
    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 1rem;

        h2 {
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    }
    .image {
        width: 100%;
    }

    .service-section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .services {
            width: 100%;
            display: flex;
            justify-content: space-between;
            column-gap: 1rem;
        }
    }
`
