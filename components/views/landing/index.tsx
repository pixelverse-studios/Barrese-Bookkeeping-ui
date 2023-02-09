import { useRef } from 'react'
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
    const serviceRef = useRef<HTMLDivElement>(null)
    const scrollToService = () => {
        if (serviceRef.current)
            serviceRef.current.scrollIntoView({
                behavior: 'smooth'
            })
    }
    return (
        <StyledLanding>
            {/* Image Section */}
            <div className="hero">
                <div className="overlay">
                    <div className="overlay-text">
                        <div className="title-container">
                            <h1>Outsourced</h1>
                            <h1>Accounting</h1>
                            <h2>Services</h2>
                        </div>

                        <div className="subtitle-container">
                            <h3>For SF Bay Area</h3>
                            <h3>Small Businesses</h3>
                        </div>
                        <Button label="BOOK CONSULTACHE" route="/contact" />
                    </div>
                    <div className="downArrows" onClick={scrollToService}>
                        <span className="arrow" />
                        <span className="arrow" />
                        <span className="arrow" />
                    </div>
                </div>
            </div>
            {/* Service Section */}
            <div ref={serviceRef} className="services">
                <h1>Outsourced Accounting</h1>
                <h2>For Small Businesses</h2>
                <hr />
                <div className="services-container">
                    {ServiceData.map((data, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                imageSrc={data.imageSrc}
                                cardTitle={data.cardTitle}
                                cardDescription={data.cardDescription}
                            />
                        )
                    })}
                </div>
                <Button label="Services" route="/services" />
            </div>
        </StyledLanding>
    )
}

export default Landing
