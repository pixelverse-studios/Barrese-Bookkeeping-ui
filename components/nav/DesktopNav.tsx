import { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Dashboard, Logout, MoreVert } from '@mui/icons-material'
import { Menu, MenuItem, IconButton } from '@mui/material'

import useLogout from '@/utilities/hooks/useLogout'
import useScrollPosition from '@/utilities/hooks/useScrollPosition'
import { NavRoutes, AuthNavItems } from './routes'
import Logo from '../../assets/images/BarreseBookkeeping.svg'
import LogoWhite from '../../assets/images/BarreseBookkeeping-white.svg'
import Button from '../button'
import { StyledNav, TransparantStyledNav } from './Nav.styles'

const { DASHBOARD } = AuthNavItems

interface navItemProps {
    currentPage: string
    isLoggedIn: boolean
    logout: any
}

const renderNavItems = ({ currentPage, isLoggedIn, logout }: navItemProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    return (
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
                                    currentPage === item.path
                                        ? 'activeLink'
                                        : ''
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
                    <IconButton onClick={handleMenuOpen}>
                        <MoreVert className="authMenuToggle" />
                    </IconButton>
                    <Menu
                        id="lock-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'lock-button',
                            role: 'listbox'
                        }}>
                        <Link href={DASHBOARD.path} legacyBehavior>
                            <MenuItem
                                className="authItem"
                                selected={currentPage === DASHBOARD.path}>
                                <Dashboard />
                            </MenuItem>
                        </Link>
                        <MenuItem
                            className="authItem"
                            selected={false}
                            onClick={logout}>
                            <Logout />
                        </MenuItem>
                    </Menu>
                </>
            ) : null}
        </ul>
    )
}

const NAV_TRANSITION_POINT = 10
const DesktopNav = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const { email } = useSelector((state: any) => state.user.profile)
    const isLoggedIn = Boolean(email)
    const handleLogout = useLogout()

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
                    {renderNavItems({
                        currentPage,
                        isLoggedIn,
                        logout: handleLogout
                    })}
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
                {renderNavItems({
                    currentPage,
                    isLoggedIn,
                    logout: handleLogout
                })}
            </div>
        </StyledNav>
    )
}

export default DesktopNav
