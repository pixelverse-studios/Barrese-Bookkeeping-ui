import { useSelector } from 'react-redux'

import Button from '@/components/button'
import HeroImage from '@/components/HeroHeader'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledServices } from './Services.styles'

const ServicesPage = () => {
    const { pageH1, pageH2, description, offerings, heroImage } = useSelector(
        (state: any) => state.services
    )
    const { buttonLabel } = useSelector((state: any) => state.callToAction)

    return (
        <StyledPageContainer>
            <HeroImage url={heroImage} />
            <div className="container">
                <StyledServices>
                    <div className="services-hero">
                        <h1>{pageH1}</h1>
                        <h2>{pageH2}</h2>
                        <hr />
                        <p>{description}</p>
                    </div>
                    <div className="service-details">
                        {offerings?.length ? (
                            offerings.map((offering: any, index: number) => [
                                <div className="detail-section" key={index}>
                                    <div className="imgContainer">
                                        <img src={offering.icon} alt="icon" />
                                    </div>
                                    <div className="service-info">
                                        <h1>{offering.title}</h1>
                                        <span className="description">
                                            {offering.description}
                                        </span>
                                        <ul>
                                            {offering.bullets.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                }
                                            )}
                                        </ul>
                                        <Button
                                            label={buttonLabel}
                                            route="/contact"
                                        />
                                    </div>
                                </div>
                            ])
                        ) : (
                            <div>No service offerings available</div>
                        )}
                    </div>
                </StyledServices>
            </div>
        </StyledPageContainer>
    )
}

export default ServicesPage
