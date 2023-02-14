import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Verified, ErrorOutline, Close } from '@mui/icons-material'

import { hideBanner } from '../../lib/redux/slices/banner'
import StyledBanner from './Banner.styles'

const ANIMATE_OUT_TIME = 1000
const TIMEOUT = 6000
const ANIMATE_IN_CLASS = 'animate__bounceInUp'
const ANIMATE_OUT_CLASS = 'animate__bounceOutDown'

const Banner = () => {
    const dispatch = useDispatch()
    const banner = useSelector((state: any) => state.banner)

    const [animationClass, setAnimationClass] = useState(ANIMATE_IN_CLASS)

    useEffect(() => {
        if (banner.show && banner.duration !== 'permanant') {
            setTimeout(() => {
                setAnimationClass(ANIMATE_OUT_CLASS)
            }, TIMEOUT - ANIMATE_OUT_TIME)
            setTimeout(() => {
                dispatch(hideBanner())
                setAnimationClass(ANIMATE_IN_CLASS)
            }, TIMEOUT)
        }
    }, [banner])

    const onCloseClick = () => dispatch(hideBanner())

    const renderIcon = () => {
        switch (banner.type) {
            case 'Errors':
                return <ErrorOutline className="statusIcon" />
            default:
                return <Verified className="statusIcon" />
        }
    }

    if (banner.show) {
        return (
            <StyledBanner
                className={`${
                    banner.type === 'Errors' ? 'Errors' : 'Success'
                } animate__animated ${animationClass}`}>
                <div className="bannerContent">
                    {renderIcon()}
                    {banner.message}
                    <Close className="closeIcon" onClick={onCloseClick} />
                </div>
            </StyledBanner>
        )
    }

    return null
}

export default Banner
