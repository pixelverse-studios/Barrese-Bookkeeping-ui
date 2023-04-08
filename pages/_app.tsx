import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { Provider as ReduxProvider } from 'react-redux'

import Logo from '@/assets/images/B_Logo-transparent.png'
import { client } from '@/lib/context/apolloProvider'
import { store } from '@/lib/redux/store'
import PageWrapper from '@/views/PageWrapper'
import 'animate.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Barrese Bookkeeping LLC</title>
                <meta
                    name="description"
                    content="Barrese Bookkeeping Homepage"
                />
                <meta
                    name="viewport"
                    content="width=device-widthm initial-scale=1"
                />
                <link rel="icon" href={Logo.src} />
            </Head>
            <ApolloProvider client={client}>
                <ReduxProvider store={store}>
                    <PageWrapper>
                        <Component {...pageProps} />
                    </PageWrapper>
                </ReduxProvider>
            </ApolloProvider>
        </>
    )
}
