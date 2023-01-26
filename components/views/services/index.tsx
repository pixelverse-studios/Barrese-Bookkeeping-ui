import Button from '@/components/button'
import ServiceData from './dummydata'
import { StyledServices } from './Services.styles'
const ServicesPage = () => {
    const { pageH1, pageH2, description, offerings } = ServiceData
    return (
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
                            <span>{item.description}</span>
                            <ul>
                                {item.bullets.map((item, index) => {
                                    return <li key={index}>{item}</li>
                                })}
                            </ul>
                            <Button label="Book lala" />
                        </div>
                    </div>
                ])}
            </div>
        </StyledServices>
    )
}

export default ServicesPage
