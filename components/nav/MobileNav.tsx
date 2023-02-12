import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavRoutes, AuthNavItems } from './routes'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import { StyledMobileNav } from './Nav.styles'

const { DASHBOARD } = AuthNavItems

const MobileNav = () => {
    const [show, setShow] = useState<boolean>(false)
    const [stopScroll, setStopScroll] = useState<boolean>(false)
    const router = useRouter()
    const menuToggle = () => {
        setShow(!show)
        setStopScroll(!stopScroll)
    }

    useEffect(() => {
        if (stopScroll === true) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [stopScroll])

    const isLoggedIn = true

    return (
        <StyledMobileNav>
            <div className={show === true ? 'header menuOpened' : 'header'}>
                <div className="logo-container">
                    <img
                        className="logo"
                        src={Logo.src}
                        alt="Barrese Bookkeeping"
                        onClick={() => {
                            router.push('/')
                        }}
                    />
                </div>
                <div className="burgerContainer" onClick={menuToggle}>
                    <div className="burger">
                        <div className="bar topBar"></div>
                        <div className="bar btmBar"></div>
                    </div>
                </div>
                <ul
                    className="menu"
                    style={{ display: `${show === true ? 'block' : 'none'}` }}>
                    {NavRoutes.map((item, index) => (
                        <li
                            key={index}
                            className="menuItem"
                            onClick={menuToggle}>
                            <Link href={item.path} legacyBehavior>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    {isLoggedIn ? (
                        <>
                            <li className="menuItem">
                                <Link href={DASHBOARD.path}>
                                    {DASHBOARD.label}
                                </Link>
                            </li>
                            <li className="menuItem">
                                <span>Logout</span>
                            </li>
                        </>
                    ) : null}
                </ul>
            </div>
        </StyledMobileNav>
    )
}
export default MobileNav
