import { useRef, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { BASE_ANIMATE, FADE_ANIMATE } from '@/utilities/constants'
import Button from '../button'
import { StyledCallToAction } from './CallToAction.styles'

const CallToAction = () => {
    const { image, heading, description, buttonLabel } = useSelector(
        (state: any) => state.callToAction
    )
    const ctaRef = useRef<HTMLDivElement>(null)
    const handleAnimations = useCallback(() => {
        const { y } = ctaRef?.current?.getBoundingClientRect() as any
        const pageHeight = window.innerHeight

        if (y < pageHeight) {
            if (!ctaRef?.current?.classList.contains(BASE_ANIMATE)) {
                ctaRef?.current?.classList.add(BASE_ANIMATE)
                ctaRef?.current?.classList.add(FADE_ANIMATE)
            }
        }
    }, [])
    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', handleAnimations)
        }
        watchScroll()
        return () => {
            window.removeEventListener('scroll', handleAnimations)
        }
    }, [])
    useEffect(() => {
        const rects = ctaRef?.current?.getBoundingClientRect() as any
        const pageHeight = window.innerHeight
        if (rects.top <= pageHeight) {
            handleAnimations()
        }
    }, [])

    return (
        <StyledCallToAction ref={ctaRef}>
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
