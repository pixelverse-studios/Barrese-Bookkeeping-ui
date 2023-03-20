import ContentSpacing from '@/styles/components/StyledContentSpacing'
import styled from '@emotion/styled'

export const StyledPageContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .container {
        ${ContentSpacing}
        padding-top: 3rem;

        @media only screen and (max-width: 1350px) {
            width: 100%;
        }
    }
`
