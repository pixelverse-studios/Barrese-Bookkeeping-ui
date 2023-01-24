import Button from '@/components/button'
import ServiceCard from '@/components/ServiceCard'
import { StyledLanding } from './Landing.styles'

const ServiceData = [
    {
        imageSrc: 'https://dummyimage.com/450x600/000/fff',
        cardTitle: 'Service 1',
        cardDescription:
            'Service 1 Description of how we are going to do stuff or what this service actually does maybe ?'
    },
    {
        imageSrc: 'https://dummyimage.com/450x600/000/fff',
        cardTitle: 'Service 2',
        cardDescription:
            'Service 2 Description of how we are going to do stuff or what this service actually does maybe ?'
    },
    {
        imageSrc: 'https://dummyimage.com/450x600/000/fff',
        cardTitle: 'Service 3',
        cardDescription:
            'Service 3 Description of how we are going to do stuff or what this service actually does maybe ?'
    }
]

const Landing = () => {
    return (
        <StyledLanding>
            <div className="heading">
                <h1>Expertise in accounting</h1>
                <h2>
                    <span>We are a River Vale-based accounting firm </span>
                    <span>
                        that personalizes services to meet our customers' needs
                    </span>
                </h2>
                <Button label="Contact Us" />
            </div>
            <img
                src="https://dummyimage.com/1600x400/000/fff"
                alt="Landing Image"
                className="image"
            />
            <div className="service-section">
                <h3>OUR OFFERING</h3>
                <h1>Accounting </h1>
                <h1>Services</h1>
                <div className="services">
                    {ServiceData.map((data, index) => {
                        return (
                            <div className="service">
                                <ServiceCard
                                    imageSrc={data.imageSrc}
                                    cardTitle={data.cardTitle}
                                    cardDescription={data.cardDescription}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledLanding>
    )
}

export default Landing
