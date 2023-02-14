import styled from '@emotion/styled'

export const StyledServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 0.75rem;
    padding: 3rem 0rem;
    color: var(--Primary-brand-color);
    img {
        width: 15rem;
        height: 15rem;
    }

    p {
        max-width: 15rem;
        padding: 1rem;
        border-top: 2px solid var(--Secondary-accent-color);
        border-bottom: 2px solid var(--Secondary-accent-color);
    }
`
