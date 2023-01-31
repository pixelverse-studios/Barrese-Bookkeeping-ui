import { useRouter } from 'next/router'
import Button from '../button'
import { StyledCallToAction } from './CallToAction.styles'

const CallToAction = () => {
    const router = useRouter()

    return (
        <StyledCallToAction>
            <img src="https://via.placeholder.com/150" alt="" />
            <div className="content">
                <h1>Book a Consultache</h1>
                <p className="subText">
                    Your boii knows his shit so use a service.
                </p>
            </div>
            <Button route="/contact" label="Contact Us" />
        </StyledCallToAction>
    )
}

export default CallToAction
