import styled from '@emotion/styled'

export const StyledAbout = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    hr {
        margin: 0 !important;
    }

    .about-company {
        display: flex;
        justify-content: space-around;
        padding: 3rem 5rem;

        p {
            max-width: 450px;
        }
    }

    .about-employee {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: gray;
        padding: 3rem 5rem;
        img {
            padding-top: 1rem;
            border-radius: 50%;
        }
        p {
            max-width: 550px;
        }
    }
`
