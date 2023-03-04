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
    const { dashboard, about } = useSelector((state: any) => state.cmsData.cms)

    const router = useRouter()

    const handleLogout = useLogout()
    const currentPage = router.pathname

    if (!about?.profilePic) {
        return <span>...loading</span>
    }

    const pageHeader =
        dashboard?.find(
            (page: { route: string; label: string }) =>
                page.route === currentPage
        )?.label || ''

    return (
        <StyledDashboardPage>
            <StyledDashboardSideNav>
                <div className="navHeader">
                    <img
                        className="logo"
                        src={LogoWhiteNoBg.src}
                        alt="Barrese Bookkeeping"
                    />
                </div>
                <ul>
                    {dashboard?.map(
                        (page: { route: string; label: string }) => (
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
                        )
                    )}
                </ul>
            </StyledDashboardSideNav>
            <div className="dashboardMain">
                <StyledDashboardHeader>
                    <IconButton onClick={handleLogout}>
                        <Logout />
                    </IconButton>
                    <Avatar alt="profile-pic" src={about.profilePic} />
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
