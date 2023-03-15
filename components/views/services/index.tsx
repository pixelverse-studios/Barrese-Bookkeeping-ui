import { useSelector } from 'react-redux'

import Button from '@/components/button'
import HeroImage from '@/components/HeroHeader'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledServices } from './Services.styles'

const ServicesPage = () => {
    const { pageH1, pageH2, description, offerings } = useSelector(
        (state: any) => state.services
    )
    return (
        <StyledPageContainer>
            <HeroImage url="https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80" />
            <div className="container">
                <StyledServices>
                    <div className="services-hero">
                        <h1>{pageH1}</h1>
                        <h2>{pageH2}</h2>
                        <hr />
                        <p>{description}</p>
                    </div>
                    <div className="service-details">
                        {offerings.map((offering: any, index: number) => [
                            <div className="detail-section" key={index}>
                                <img src={offering.icon} alt="icon" />
                                <div className="service-info">
                                    <h1>{offering.title}</h1>

                                    <span className="description">
                                        {offering.description}
                                    </span>
                                    <ul>
                                        {offering.bullets.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <li key={index}>{item}</li>
                                                )
                                            }
                                        )}
                                    </ul>
                                    <Button
                                        label="Book lala"
                                        route="/contact"
                                    />
                                </div>
                            </div>
                        ])}
                    </div>
                </StyledServices>
            </div>
        </StyledPageContainer>
    )
}

export default ServicesPage
