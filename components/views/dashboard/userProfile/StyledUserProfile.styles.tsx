import styled from '@emotion/styled'

import CardStyles from '@/styles/components/StyledCard'

export const StyledUserProfile = styled.section`
    .userInfo {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-gap: 1rem;

        @media screen and (max-width: 1000px) {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }
    }
`

export const StyledProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${CardStyles}

    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
    }

    .cardFooter {
        width: 100%;
        padding: 0 var(--card-padding);
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgb(242, 239, 233);
    }
`

export const StyledPasswordResetForm = styled.form`
    ${CardStyles}
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    .formContent {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: flex-start;

        .submit {
            width: 12rem;
        }
    }
`
