import { css } from '@emotion/react'

const CardStyles = css`
    box-shadow: var(--card-box-shadow);
    border-radius: var(--card-radius);
    padding: var(--card-padding);

    @media screen and (max-width: 1000px) {
        padding: 0 3rem;
    }
`

export default CardStyles
