import Nav from '../nav'
import CallToAction from '../CallToAction'
import { useRouter } from 'next/router'
const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const currentRoute = router.pathname
    return (
        <main>
            <Nav />
            <div style={{ height: 1000, background: 'grey' }}></div>
            {currentRoute !== '/contact' && <CallToAction />}
        </main>
    )
}

export default PageWrapper
