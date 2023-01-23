import { useRouter } from 'next/router'

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
            <button
                onClick={() => {
                    router.push('/contact')
                }}>
                CONTACT US
            </button>
        </StyledCallToAction>
    )
}

export default CallToAction
