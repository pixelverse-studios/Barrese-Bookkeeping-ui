import { useState } from 'react'

import HeroImage from '@/components/HeroHeader'
import { StyledFAQ } from './FAQ.styles'

import DummyFAQs from './dummydata'

const FAQPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const toggleAccordion = (selected: string) =>
        setExpanded(selected === expanded ? false : selected)

    return (
        <StyledFAQ>
            <HeroImage url="https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80" />
            <div className="FAQ-container">
                <h1>FAQs</h1>
                <h2>Frequently Asked Questions</h2>
                <div className="accordion">
                    {DummyFAQs.map((data, index) => {
                        const currentFAQ = `accordion-button-${index}`
                        return (
                            <div className="accordion-item" key={index}>
                                <button
                                    onClick={() => toggleAccordion(currentFAQ)}
                                    id={currentFAQ}
                                    aria-expanded={currentFAQ === expanded}>
                                    <span className="icon" aria-hidden="true" />
                                    <span className="accordion-title">
                                        {data.question}
                                    </span>
                                </button>
                                <div className="accordion-content">
                                    <p>{data.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </StyledFAQ>
    )
}

export default FAQPage
