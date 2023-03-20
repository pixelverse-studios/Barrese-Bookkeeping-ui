import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'

import useAnimation from '@/utilities/hooks/useAnimation'
import GearsLoader from './GearsLoader'
import { StyledFullPageLoader, StyledPartialLoader } from './Loader.styles'

const InlineLoader = () => {
    return <CircularProgress size={18} />
}

const FullPageLoader = () => (
    <StyledFullPageLoader>
        <GearsLoader />
    </StyledFullPageLoader>
)

const ANIMATE_OUT_TIME = 1000
const TIMEOUT = 2000
const ANIMATE_IN_CLASS = 'animate__bounceIn'
const ANIMATE_OUT_CLASS = 'animate__bounceOut'

const PartialLoader = ({ show }: { show: boolean }) => {
    const { animation } = useAnimation({
        show,
        entranceName: ANIMATE_IN_CLASS,
        exitName: ANIMATE_OUT_CLASS,
        exitTime: ANIMATE_OUT_TIME,
        duration: TIMEOUT
    })

    if (animation === '') {
        return null
    }

    return (
        <StyledPartialLoader className={`animate__animated ${animation}`}>
            <GearsLoader />
        </StyledPartialLoader>
    )
}

export { InlineLoader, FullPageLoader, PartialLoader }
