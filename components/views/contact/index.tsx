import { StyledContact } from './Contact.styles'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import Logo from '../../../assets/images/BarreseBookkeeping.svg'

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
            <div className="hero">
                <div className="overlay" />
            </div>
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
