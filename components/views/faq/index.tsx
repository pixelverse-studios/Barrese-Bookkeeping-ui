import { useEffect, useState } from 'react'
import { StyledFAQ } from './FAQ.styles'

import DummyFAQs from './dummydata'

const FAQPage = () => {
    const [expanded, setExpanded] = useState<string | false>(false)
    const [items, setItems] = useState<any>([])

    useEffect(() => {
        setItems(document.querySelectorAll('.accordion button'))
    }, [])

    function toggleAccordion(this: any) {
        const itemToggle = this.getAttribute('aria-expanded')

        for (var i = 0; i < items.length; i++) {
            items[i].setAttribute('aria-expanded', 'false')
        }

        if (itemToggle == 'false') {
            this.setAttribute('aria-expanded', 'true')
        }
    }

    items.forEach((item: any) =>
        item.addEventListener('click', toggleAccordion)
    )
    return (
        <StyledFAQ>
            <div className="hero">
                <div className="overlay" />
            </div>
            <div className="FAQ-container">
                <h1>FAQs</h1>
                <h2>Frequently Asked Questions</h2>
                <div className="accordion">
                    {DummyFAQs.map((data, index) => {
                        return (
                            <div className="accordion-item" key={index}>
                                <button
                                    id="accordion-button-1"
                                    aria-expanded="false">
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
