import styled from '@emotion/styled'

import { StyledHeroImage } from './HeroHeader.styles'

interface HeroProps {
    url: string
}

const HeroImage = ({ url }: HeroProps) => {
    return (
        <StyledHeroImage url={url}>
            <div className="overlay" />
        </StyledHeroImage>
    )
}

export default HeroImage
