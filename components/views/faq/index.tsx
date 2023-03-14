import { useState } from 'react'
import { useSelector } from 'react-redux'

import HeroImage from '@/components/HeroHeader'
import { StyledFAQ } from './FAQ.styles'
import { StyledPageContainer } from '../PageContainer.styles'

const FAQPage = () => {
    const { pageH1, pageH2, heroImage, qAndA } = useSelector(
        (state: any) => state.faqs
    )
    const [expanded, setExpanded] = useState<string | false>(false)

    const toggleAccordion = (selected: string) =>
        setExpanded(selected === expanded ? false : selected)

    return (
        <StyledPageContainer>
            <HeroImage url={heroImage} />
            <div className="container">
                <StyledFAQ>
                    <h1>{pageH1}</h1>
                    <h2>{pageH2}</h2>
                    <hr />
                    <div className="accordion">
                        {qAndA.map((data: any, index: any) => {
                            const currentFAQ = `accordion-button-${index}`
                            return (
                                <div className="accordion-item" key={index}>
                                    <button
                                        onClick={() =>
                                            toggleAccordion(currentFAQ)
                                        }
                                        id={currentFAQ}
                                        aria-expanded={currentFAQ === expanded}>
                                        <span
                                            className="icon"
                                            aria-hidden="true"
                                        />
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
                </StyledFAQ>
            </div>
        </StyledPageContainer>
    )
}

export default FAQPage
