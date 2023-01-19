import Nav from '../nav'
const PageWrapper = ({ children }: { children: any }) => {
    return (
        <main>
            <Nav />
            <div style={{ height: 10000, background: 'grey' }}></div>
        </main>
    )
}

export default PageWrapper
