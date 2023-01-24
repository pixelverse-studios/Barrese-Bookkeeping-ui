import Button from '@/components/button'
import LandingImage from '../../../assets/images/LandingImage.jpg'
import { StyledLanding } from './Landing.styles'

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
        </StyledLanding>
    )
}

export default Landing
