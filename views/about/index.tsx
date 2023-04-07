import { useSelector } from 'react-redux'

import { ANIMATION_CLASS } from '@/utilities/constants'
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
                <StyledAbout className={ANIMATION_CLASS}>
                    <h1>{header}</h1>
                    <h2>{subHeader}</h2>
                    <hr />
                    <div className="about">
                        <div className="about-image-title">
                            <img src={profilePic} alt="" />
                            <span>{title}</span>
                            <span>{role}</span>
                        </div>
                        {backgroundInfo?.length ? (
                            backgroundInfo.map((item: any) => (
                                <p key={item}>{item}</p>
                            ))
                        ) : (
                            <div>No current background info</div>
                        )}
                    </div>
                </StyledAbout>
            </div>
        </StyledPageContainer>
    )
}

export default AboutPage
