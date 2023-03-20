import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

export const StyledPageContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .container {
        ${ContentSpacing}
        padding: 3rem 0;

        @media only screen and (max-width: 1350px) {
            width: 100%;
        }

        @media only screen and (max-width: 750px) {
            padding: 3rem 1rem;
        }
    }
`
