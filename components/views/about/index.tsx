import { useSelector } from 'react-redux'

import HeroImage from '@/components/HeroHeader'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledAbout } from './About.styles'

const AboutPage = () => {
    const {
        backgroundInfo,
        role,
        title,
        header,
        subHeader,
        heroImage,
        profilePic
    } = useSelector((state: any) => state.about)

    return (
        <StyledPageContainer>
            <HeroImage url={heroImage} />
            <div className="container">
                <StyledAbout>
                    <h1>{header}</h1>
                    <h2>{subHeader}</h2>
                    <hr />
                    <div className="about">
                        <div className="about-image-title">
                            <img src={profilePic} alt="" />
                            <span>{title}</span>
                            <span>{role}</span>
                        </div>
                        <p>{backgroundInfo}</p>
                    </div>
                </StyledAbout>
            </div>
        </StyledPageContainer>
    )
}

export default AboutPage
