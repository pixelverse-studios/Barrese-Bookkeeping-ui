import { StyledHeroImage } from './HeroHeader.styles'

const HeroImage = ({ url }: { url: string }) => {
    return (
        <StyledHeroImage url={url}>
            <div className="overlay" />
        </StyledHeroImage>
    )
}

export default HeroImage
