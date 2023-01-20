import Nav from '../nav'
import CallToAction from '../CallToAction'
const PageWrapper = ({ children }: { children: any }) => {
    return (
        <main>
            <Nav />
            <div style={{ height: 10000, background: 'grey' }}></div>
            <CallToAction />
        </main>
    )
}

export default PageWrapper
