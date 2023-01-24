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
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1652&q=80"
                alt="Landing Image"
                className="image"
            />
        </StyledLanding>
    )
}

export default Landing
