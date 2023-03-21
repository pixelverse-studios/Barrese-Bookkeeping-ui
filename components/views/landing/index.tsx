import { useRef } from 'react'
import { useSelector } from 'react-redux'

import Button from '@/components/button'
import ServiceCard from '@/components/ServiceCard'

import { StyledLanding } from './Landing.styles'

const Landing = () => {
    const {
        heroImage,
        heroBannerH1,
        heroBannerH2,
        subtext,
        header,
        subHeader
    } = useSelector((state: any) => state.landing)
    const { buttonLabel } = useSelector((state: any) => state.callToAction)
    const { offerings } = useSelector((state: any) => state.services)

    const serviceRef = useRef<HTMLDivElement>(null)
    const scrollToService = () => {
        if (serviceRef.current)
            serviceRef.current.scrollIntoView({
                behavior: 'smooth'
            })
    }
    return (
        <StyledLanding backgroundImg={heroImage}>
            <div className="hero">
                <div className="overlay">
                    <div className="overlay-text">
                        <div className="title-container">
                            <h1>{heroBannerH1}</h1>
                            <h2>{heroBannerH2}</h2>
                        </div>
                        <div className="subtitle-container">
                            <h3>{subtext}</h3>
                        </div>
                        <Button label={buttonLabel} route="/contact" />
                    </div>
                    <div className="downArrows" onClick={scrollToService}>
                        <span className="arrow" />
                        <span className="arrow" />
                        <span className="arrow" />
                    </div>
                </div>
            </div>
            <div ref={serviceRef} className="services">
                <h1>{header}</h1>
                <h2>{subHeader}</h2>
                <hr />
                <div className="services-container">
                    {offerings?.length ? (
                        offerings.map((data: any, index: number) => {
                            return (
                                <ServiceCard
                                    key={index}
                                    imageSrc={data.icon}
                                    cardTitle={data.title}
                                    cardDescription={data.description}
                                />
                            )
                        })
                    ) : (
                        <div>No service offerings available at this time.</div>
                    )}
                </div>
                <Button label="Services" route="/services" />
            </div>
        </StyledLanding>
    )
}

export default Landing
