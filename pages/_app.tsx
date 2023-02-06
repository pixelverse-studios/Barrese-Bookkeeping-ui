import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { client } from '@/lib/context/apolloProvider'
import PageWrapper from '@/components/views/PageWrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <PageWrapper>
                <Component {...pageProps} />
            </PageWrapper>
        </ApolloProvider>
    )
}
