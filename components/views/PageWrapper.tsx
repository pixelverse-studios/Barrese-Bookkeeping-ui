import { useRouter } from 'next/router'

import Nav from '../nav'
import CallToAction from '../CallToAction'
import Footer from '../footer'

import { StyledMain } from './PageWrapper.styles'

const noCallToActionPages = [
    '/contact',
    '/services',
    '/login',
    '/register',
    '/reset-password'
]
const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <StyledMain>
            <Nav />
            {children}
            {!noCallToActionPages.includes(currentRoute) ? (
                <CallToAction />
            ) : null}
            <Footer />
        </StyledMain>
    )
}

export default PageWrapper
