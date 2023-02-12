import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dashboard, Logout } from '@mui/icons-material'

import useScrollPosition from '@/utilities/hooks/useScrollPosition'
import { NavRoutes, AuthNavItems } from './routes'

import Logo from '../../assets/images/BarreseBookkeeping.svg'
import LogoWhite from '../../assets/images/BarreseBookkeeping-white.svg'
import Button from '../button'
import { StyledNav, TransparantStyledNav } from './Nav.styles'

const { DASHBOARD } = AuthNavItems

const renderNavItems = (currentPage: string, isLoggedIn: boolean) => (
    <ul className="navRoutes">
        {NavRoutes.map((item, index) => {
            if (item.type === 'link') {
                return (
                    <li
                        key={index}
                        className={
                            currentPage === item.path
                                ? 'activeLink'
                                : 'navLinks'
                        }>
                        <Link
                            href={item.path}
                            legacyBehavior
                            className={
                                currentPage === item.path ? 'activeLink' : ''
                            }>
                            {item.label}
                        </Link>
                    </li>
                )
            }
            return <Button label={item.label} route={item.path} />
        })}
        {isLoggedIn ? (
            <>
                <li
                    className={
                        currentPage === DASHBOARD.path
                            ? 'activeLink'
                            : 'navLinks'
                    }>
                    <Link
                        className={
                            currentPage === DASHBOARD.path ? 'activeLink' : ''
                        }
                        href={DASHBOARD.path}
                        legacyBehavior>
                        <Dashboard />
                    </Link>
                </li>
                <li>
                    <Logout />
                </li>
            </>
        ) : null}
    </ul>
)

const NAV_TRANSITION_POINT = 10
const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const scrollPosition = useScrollPosition()

    if (scrollPosition < NAV_TRANSITION_POINT) {
        return (
            <TransparantStyledNav>
                <div className="navContent">
                    <img
                        className="logo"
                        src={LogoWhite.src}
                        alt="Barrese Bookkeeping"
                        onClick={() => {
                            router.push('/')
                        }}
                    />
                    {renderNavItems(currentPage, true)}
                </div>
            </TransparantStyledNav>
        )
    }

    return (
        <StyledNav>
            <div className="navContent">
                <img
                    className="logo"
                    src={Logo.src}
                    alt="Barrese Bookkeeping"
                    onClick={() => {
                        router.push('/')
                    }}
                />
                {renderNavItems(currentPage, true)}
            </div>
        </StyledNav>
    )
}

export default DesktopNav
