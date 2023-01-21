import { useRouter } from 'next/router'

import Nav from '../nav'
import CallToAction from '../CallToAction'
import Footer from '../footer'

const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <main>
            <Nav />
            <div style={{ height: 1000, background: 'grey' }}></div>
            {currentRoute !== '/contact' && <CallToAction />}
            <Footer />
        </main>
    )
}

export default PageWrapper
