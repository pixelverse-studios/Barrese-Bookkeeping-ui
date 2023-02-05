import { useState } from 'react'
import { StyledFAQ } from './FAQ.styles'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import DummyFAQs from './dummydata'

const FAQPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange =
        (panel: string) =>
        (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false)
        }

    return (
        <StyledFAQ>
            <div className="hero">
                <div className="overlay" />
            </div>
            <div className="FAQ-container">
                <div className="content">
                    <h1>Title</h1>
                    <h2>Subtext</h2>
                    {DummyFAQs.map((item, index) => {
                        return (
                            <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                                key={index}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panella-content">
                                    <Typography>{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
            </div>
        </StyledFAQ>
    )
}

export default FAQPage
