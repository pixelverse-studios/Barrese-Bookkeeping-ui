import styled from '@emotion/styled'
import { css } from '@emotion/react'

const padding = `1.5rem`

const CardStyles = css`
    box-shadow: var(--card-box-shadow);
    border-radius: var(--card-radius);
`

export const StyledUserProfile = styled.section`
    .userInfo {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-gap: 1rem;
    }
`

export const StyledProfileCard = styled.div`
    display: grid;
    grid-template-rows: 1fr 5rem 3rem;
    grid-template-columns: 20rem;
    padding: ${padding} 0;
    ${CardStyles}

    img,
    .skelly {
        width: 65%;
        border-radius: 50%;
        margin: auto;
    }

    .skelly {
        height: 13rem;
    }

    .info {
        padding: 0 ${padding};
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .cardFooter {
        width: 100%;
        padding: 0 ${padding};
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgb(242, 239, 233);
    }
`

export const StyledProfileInfo = styled.div``

export const StyledPasswordResetForm = styled.form`
    ${CardStyles}
    padding: ${padding};
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
