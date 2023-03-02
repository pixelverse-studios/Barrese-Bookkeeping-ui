import styled from '@emotion/styled'

export const StyledUserProfile = styled.section`
    .userInfo {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-gap: 1rem;
    }
`

export const StyledProfileCard = styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-rows: 1fr 5rem 3rem;
    grid-template-columns: 20rem;
    box-shadow: var(--card-box-shadow);
    border-radius: var(--card-radius);

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
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .cardFooter {
        width: 100%;
        padding: 0 1rem;
        padding-top: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid rgb(242, 239, 233);
    }
`

export const StyledProfileInfo = styled.div``
