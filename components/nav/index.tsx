import { useState, useEffect } from 'react'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '@/utilities/hooks/useBreakpointSize'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Nav = () => {
    const breakpoint = useBreakpointSize()
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

    useEffect(() => {
        setShowMobileNav(breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])

    return <>{showMobileNav ? <MobileNav /> : <DesktopNav />}</>
}

export default Nav
