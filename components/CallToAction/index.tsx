import { useSelector } from 'react-redux'

import Button from '../button'
import { StyledCallToAction } from './CallToAction.styles'

const CallToAction = () => {
    const { image, heading, description, buttonLabel } = useSelector(
        (state: any) => state.callToAction
    )

    return (
        <StyledCallToAction>
            <div className="container">
                <img src={image} alt="callToActionImage" />
                <div className="content">
                    <h1>{heading}</h1>
                    <p className="subText">{description}</p>
                </div>
                <Button route="/contact" label={buttonLabel} />
            </div>
        </StyledCallToAction>
    )
}

export default CallToAction
