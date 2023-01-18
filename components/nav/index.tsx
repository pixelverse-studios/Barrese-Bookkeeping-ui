import Link from 'next/link'
import { useRouter } from 'next/router'

import useBreakpointSize, {
    MOBILE_BREAKPOINT
} from '../../utilities/hooks/useBreakpointSize'
import { routes } from './routes'

import Button from '../button'
import StyledNav from './Nav.styles'

const Nav = () => {
    return (
        <StyledNav>
            <div className="logo">Barrese Bookkeeping</div>
            <div className="navContent">
                <ul className="navRoutes">
                    {routes.map(item => {
                        return <li>{item.label}</li>
                    })}
                </ul>
                <Button value={'Contact'} />
            </div>
        </StyledNav>
    )
}

export default Nav
