import HeroImage from '@/components/HeroHeader'

import { ANIMATION_CLASSES } from '@/utilities/constants'
import { StyledPageContainer } from '../PageContainer.styles'
import { StyledContact } from './Contact.styles'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

const { base, prefix, general } = ANIMATION_CLASSES
const overlayAnimation = `${base} ${prefix}${general}`

const ContactPage = () => {
    const onEventScheduled = (e: any) => {
        console.log('eventUrl', e.data.payload.event.uri)
        console.log('inviteeUri ', e.data.payload.invitee.uri)
    }

    useCalendlyEventListener({
        onEventScheduled: onEventScheduled
    })

    return (
        <StyledPageContainer>
            <HeroImage url="https://res.cloudinary.com/ezpzcoding-cloudinary/image/upload/v1680231303/barrese_bookkeeping/contact_picture_pt2byk.png" />
            <div className="container">
                <StyledContact className={overlayAnimation}>
                    <InlineWidget url="https://calendly.com/barresebookkeeping" />
                </StyledContact>
            </div>
        </StyledPageContainer>
    )
}

export default ContactPage
