import type { AppProps } from 'next/app'
import PageWrapper from '@/components/views/PageWrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <PageWrapper>
            <Component {...pageProps} />)
        </PageWrapper>
    )
}
