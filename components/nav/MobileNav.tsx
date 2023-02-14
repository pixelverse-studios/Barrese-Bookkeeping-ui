import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { logout } from '@/lib/redux/slices/user'

import { NavRoutes, AuthNavItems } from './routes'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import { StyledMobileNav } from './Nav.styles'

const { DASHBOARD } = AuthNavItems

const MobileNav = () => {
    const dispatch = useDispatch()
    const { email } = useSelector((state: any) => state.user.profile)
    const isLoggedIn = Boolean(email)

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

    const routeToHome = () => {
        setShow(false)
        router.push('/')
    }
    const handleLogout = () => logout(dispatch, router)

    return (
        <StyledMobileNav>
            <div className={show === true ? 'header menuOpened' : 'header'}>
                <div className="logo-container">
                    <img
                        className="logo"
                        src={Logo.src}
                        alt="Barrese Bookkeeping"
                        onClick={() => routeToHome()}
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
                            <li className="menuItem" onClick={handleLogout}>
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
