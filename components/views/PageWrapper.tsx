import { useRouter } from 'next/router'

import Nav from '../nav'
import CallToAction from '../CallToAction'
import Footer from '../footer'

import { StyledMain } from './PageWrapper.styles'

const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <StyledMain>
            <div>
                <Nav />
                {children}
                {currentRoute !== '/contact' && <CallToAction />}
                <Footer />
            </div>
        </StyledMain>
    )
}

export default PageWrapper
