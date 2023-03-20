import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logout, MoreVert } from '@mui/icons-material'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { useSelector } from 'react-redux'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '@/utilities/hooks/useBreakpointSize'
import useLogout from '@/utilities/hooks/useLogout'
import {
    StyledDashboardPage,
    StyledDashboardSideNav,
    StyledDashboardHeader
} from './StyledDashboardComponents.styles'
import LogoWhiteNoBg from '@/assets/images/BarreseBookkeeping-white-nobg.svg'

const DashboardPage = ({ children }: { children: any }) => {
    const { routes } = useSelector((state: any) => state.dashboard)
    const { profilePic } = useSelector((state: any) => state.about)
    const breakpoint = useBreakpointSize()

    const isMobile = breakpoint === MOBILE_BREAKPOINT

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const router = useRouter()

    const handleLogout = useLogout()
    const currentPage = router.pathname

    if (!profilePic) {
        return <span>...loading</span>
    }

    const pageHeader =
        routes?.find(
            (page: { route: string; label: string }) =>
                page.route === currentPage
        )?.label || ''

    const onMenuClose = () => {
        setAnchorEl(null)
    }

    const onMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const onMenuItemClick = (path: string) => {
        setAnchorEl(null)
        router.push(path)
    }

    return (
        <StyledDashboardPage>
            {!isMobile ? (
                <StyledDashboardSideNav>
                    <div className="navHeader">
                        <img
                            onClick={() => router.push('/')}
                            className="logo"
                            src={LogoWhiteNoBg.src}
                            alt="Barrese Bookkeeping"
                        />
                    </div>
                    <ul>
                        {routes?.map(
                            (page: { route: string; label: string }) => (
                                <li
                                    key={page.label}
                                    className={
                                        page.route === currentPage
                                            ? 'active'
                                            : 'inactive'
                                    }>
                                    <Link key={page.route} href={page.route}>
                                        <span key={page.label}>
                                            {page.label}
                                        </span>
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </StyledDashboardSideNav>
            ) : null}
            <div className="dashboardMain">
                <StyledDashboardHeader>
                    {isMobile ? (
                        <>
                            <IconButton onClick={onMenuOpen}>
                                <MoreVert className="authMenuToggle" />
                            </IconButton>
                            <Menu
                                id="dashboard-mobile-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={onMenuClose}
                                MenuListProps={{
                                    'aria-labelledby': 'lock-button',
                                    role: 'listbox'
                                }}>
                                {routes?.map(
                                    (page: {
                                        route: string
                                        label: string
                                    }) => (
                                        // <Link
                                        //     key={page.route}
                                        //     href={page.route}>
                                        <MenuItem
                                            onClick={() =>
                                                onMenuItemClick(page.route)
                                            }
                                            className="mobileNavItem"
                                            selected={
                                                page.route === currentPage
                                            }>
                                            <span
                                                className={
                                                    page.route === currentPage
                                                        ? 'active'
                                                        : ''
                                                }>
                                                {page.label}
                                            </span>
                                        </MenuItem>
                                        // </Link>
                                    )
                                )}
                            </Menu>
                        </>
                    ) : null}

                    <IconButton onClick={handleLogout}>
                        <Logout />
                    </IconButton>
                    <Avatar alt="profile-pic" src={profilePic} />
                </StyledDashboardHeader>
                <div className="dashboardContent">
                    <h1>{pageHeader}</h1>
                    {children}
                </div>
            </div>
        </StyledDashboardPage>
    )
}

export default DashboardPage
