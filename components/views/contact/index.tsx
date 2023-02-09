import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

import HeroImage from '@/components/HeroHeader'
import Logo from '../../../assets/images/BarreseBookkeeping.svg'
import { StyledContact } from './Contact.styles'

const ContactPage = () => {
    const onEventScheduled = (e: any) => {
        console.log('eventUrl', e.data.payload.event.uri)
        console.log('inviteeUri ', e.data.payload.invitee.uri)
    }

    useCalendlyEventListener({
        onEventScheduled: onEventScheduled
    })

    return (
        <StyledContact>
            <HeroImage />
            <div className="contact-container" id="contact-container">
                <div className="content">
                    <div className="logo-container">
                        <img
                            className="logo"
                            src={Logo.src}
                            alt="Barrese Bookkeeping"
                        />
                        <h2>Schedule a meeting today !</h2>
                    </div>
                    <InlineWidget url="https://calendly.com/barresebookkeeping" />
                </div>
            </div>
        </StyledContact>
    )
}

export default ContactPage
