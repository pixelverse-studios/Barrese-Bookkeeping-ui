import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import { client } from '@/lib/context/apolloProvider'
import { store } from '@/lib/redux/store'
import PageWrapper from '@/components/views/PageWrapper'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ReduxProvider store={store}>
                <PageWrapper>
                    <Component {...pageProps} />
                </PageWrapper>
            </ReduxProvider>
        </ApolloProvider>
    )
}
