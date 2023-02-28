import { Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import useLogout from '@/utilities/hooks/useLogout'
import {
    StyledDashboardPage,
    StyledDashboardSideNav,
    StyledDashboardHeader
} from './StyledDashboardComponents.styles'
import LogoWhite from '@/assets/images/BarreseBookkeeping-white.svg'

const DashboardPage = ({ children }: { children: any }) => {
    const handleLogout = useLogout()

    return (
        <StyledDashboardPage>
            <StyledDashboardSideNav>
                <img
                    className="logo"
                    src={LogoWhite.src}
                    alt="Barrese Bookkeeping"
                />
            </StyledDashboardSideNav>
            <div className="dashboardMain">
                <StyledDashboardHeader>
                    <IconButton onClick={handleLogout}>
                        <Logout />
                    </IconButton>
                </StyledDashboardHeader>
                <div className="dashboardContent">{children}</div>
            </div>
        </StyledDashboardPage>
    )
}

export default DashboardPage
