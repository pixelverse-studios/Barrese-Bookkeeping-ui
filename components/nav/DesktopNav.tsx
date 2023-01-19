import Link from 'next/link'
import { useRouter } from 'next/router'

import useScrollPosition from '@/utilities/hooks/useScrollPosition'
import { routes } from './routes'

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
                <div className="logo">Barrese Bookkeeping</div>
                <div className="navContent">
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
                    </ul>
                    <Link href="/contact" legacyBehavior>
                        <a>
                            <Button label={'Contact'} />
                        </a>
                    </Link>
                </div>
            </TransparantStyledNav>
        )
    }

    return (
        <StyledNav>
            <div className="logo">Barrese Bookkeeping</div>
            <div className="navContent">
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
                </ul>
                <Link href="/contact" legacyBehavior>
                    <a>
                        <Button label={'Contact'} />
                    </a>
                </Link>
            </div>
        </StyledNav>
    )
}

export default DesktopNav
