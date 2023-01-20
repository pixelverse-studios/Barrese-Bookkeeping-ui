import { StyledCTASection } from './CallToAction.styles'
import Image from 'next/image'

const CallToAction = () => {
    return (
        <StyledCTASection>
            <div className="imageHolder">
                <img src="https://via.placeholder.com/150" alt="" />
            </div>
            <div className="content">
                <h1>Book a Consultache</h1>
                <div>
                    <p className="subText">
                        Your boii knows his shit so use a service.
                    </p>
                </div>
            </div>
            <div className="buttonHolder">
                <button>CONTACT US</button>
            </div>
        </StyledCTASection>
    )
}

export default CallToAction
