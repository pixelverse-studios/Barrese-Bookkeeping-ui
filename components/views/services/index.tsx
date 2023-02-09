import Button from '@/components/button'
import HeroImage from '@/components/HeroHeader'
import ServiceData from './dummydata'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledServices } from './Services.styles'

const ServicesPage = () => {
    const { pageH1, pageH2, description, offerings } = ServiceData
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
                        {offerings.map((item, index) => [
                            <div className="detail-section" key={index}>
                                <img src={item.icon} alt="icon" />
                                <div className="service-info">
                                    <h1>{item.title}</h1>
                                    <span className="description">
                                        {item.description}
                                    </span>
                                    <ul>
                                        {item.bullets.map((item, index) => {
                                            return <li key={index}>{item}</li>
                                        })}
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
