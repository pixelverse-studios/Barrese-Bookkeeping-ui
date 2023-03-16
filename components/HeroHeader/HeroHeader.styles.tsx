import styled from '@emotion/styled'

interface Props {
    url: string
}

export const StyledHeroImage = styled.div<Props>`
    position: relative;
    height: 30vh;
    width: 100vw;
    background: linear-gradient(black, black),
        ${props => `
                url(${props.url})
            `}
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
