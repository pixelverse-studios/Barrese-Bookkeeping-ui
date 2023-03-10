import { useState, useEffect } from 'react'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '@/utilities/hooks/useBreakpointSize'

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Nav = ({ forceMobileNav }: { forceMobileNav: boolean }) => {
    const breakpoint = useBreakpointSize()
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

    useEffect(() => {
        setShowMobileNav(forceMobileNav || breakpoint === MOBILE_BREAKPOINT)
    }, [breakpoint])

    if (forceMobileNav || showMobileNav) {
        return <MobileNav />
    }

    return <DesktopNav />
}

export default Nav
