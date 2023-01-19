import Link from 'next/link'
import { useRouter } from 'next/router'

import useScrollPosition from '@/utilities/hooks/useScrollPosition'
import { routes } from './routes'

import Button from '../button'
import { StyledNav, TransparantStyledNav } from './Nav.styles'

const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const styleBreakPoint = 10

    return (
        <>
            {useScrollPosition() < styleBreakPoint ? (
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
                                <Button value={'Contact'} />
                            </a>
                        </Link>
                    </div>
                </TransparantStyledNav>
            ) : (
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
                                <Button value={'Contact'} />
                            </a>
                        </Link>
                    </div>
                </StyledNav>
            )}
        </>
    )
}

export default DesktopNav
