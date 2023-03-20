import { css } from '@emotion/react'

const ContentSpacing = css`
    width: var(--max-content-width);
    padding: var(--content-padding);
    margin: auto;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 0 1rem;
    }
`

export default ContentSpacing
