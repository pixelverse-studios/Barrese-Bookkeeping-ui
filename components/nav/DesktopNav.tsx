import Link from 'next/link'
import { useRouter } from 'next/router'

import useScrollPosition from '@/utilities/hooks/useScrollPosition'
import { routes } from './routes'

import Logo from '../../assets/images/BarreseBookkeeping.svg'
import LogoWhite from '../../assets/images/BarreseBookkeeping-white.svg'
import Button from '../button'
import { StyledNav, TransparantStyledNav } from './Nav.styles'

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
                    />
                    <ul className="navRoutes">
                        {routes.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        currentPage === item.path
                                            ? 'activeLink'
                                            : 'navLinks'
                                    }>
                                    <Link href={item.path} legacyBehavior>
                                        <a
                                            className={
                                                currentPage === item.path
                                                    ? 'activeLink'
                                                    : ''
                                            }>
                                            {item.label}
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}

                        <Button label={'Contact'} route="/contact" />
                    </ul>
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
                />
                <ul className="navRoutes">
                    {routes.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    currentPage === item.path
                                        ? 'activeLink'
                                        : 'navLinks'
                                }>
                                <Link href={item.path} legacyBehavior>
                                    <a
                                        className={
                                            currentPage === item.path
                                                ? 'activeLink'
                                                : ''
                                        }>
                                        {item.label}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                    <Button label={'Contact'} route="/contact" />
                </ul>
            </div>
        </StyledNav>
    )
}

export default DesktopNav
