import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logout } from '@mui/icons-material'
import { IconButton, Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

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

    return (
        <StyledDashboardPage>
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
                    {routes?.map((page: { route: string; label: string }) => (
                        <li
                            key={page.label}
                            className={
                                page.route === currentPage
                                    ? 'active'
                                    : 'inactive'
                            }>
                            <Link key={page.route} href={page.route}>
                                {page.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </StyledDashboardSideNav>
            <div className="dashboardMain">
                <StyledDashboardHeader>
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
