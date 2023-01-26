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
            {/* Image Section */}
            <div className="hero">
                <div className="overlay">
                    <div className="title-container">
                        <span>Outsourced</span>
                        <span>Accounting</span>
                        <span>Services</span>
                    </div>
                    <div className="subtitle-container">
                        <span>For SF Bay Area</span>
                        <span>Small Businesses</span>
                    </div>

                    <Button label="BOOK CONSULTACHE" />
                </div>
            </div>
            {/* About Section */}
            <div className="about">
                <h1>About</h1>
                <h2>Barrese Bookeeping Services</h2>
                <hr />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sit rem quod neque ipsa aperiam placeat, similique, vel
                    iste, blanditiis enim ipsum hic. Voluptas ea inventore,
                    vitae consequatur eaque commodi obcaecati. Lorem ipsum dolor
                    sit amet consectetur, adipisicing elit. Blanditiis fuga
                    sapiente cumque distinctio praesentium. Quis suscipit nobis
                    tempora, impedit soluta recusandae ut optio omnis officia,
                    autem sunt unde asperiores obcaecati?
                </p>
                <div className="button-container">
                    <Button label="Meet The Team" />
                </div>
            </div>
            {/* Service Section */}
            <div className="services">
                <h1>Outsourced Accounting</h1>
                <h2>For Small Businesses</h2>
                <hr />
                <div className="services-container">
                    {ServiceData.map((data, index) => {
                        return (
                            <div className="service" key={index}>
                                <ServiceCard
                                    imageSrc={data.imageSrc}
                                    cardTitle={data.cardTitle}
                                    cardDescription={data.cardDescription}
                                />
                            </div>
                        )
                    })}
                </div>
                <Button label="Services"></Button>
            </div>
        </StyledLanding>
    )
}

export default Landing
