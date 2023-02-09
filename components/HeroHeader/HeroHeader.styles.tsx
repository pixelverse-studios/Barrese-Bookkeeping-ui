import styled from '@emotion/styled'

export const StyledHeroImage = styled.div`
    position: relative;
    height: 30vh;
    width: 100vw;
    background: linear-gradient(black, black),
        url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80')
            no-repeat center center/cover;
    background-blend-mode: saturation;
    .overlay {
        background-color: var(--Secondary-opaque-color);
        height: 30vh;
        width: 100%;
        color: var(--Off-brand-color);
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
`
