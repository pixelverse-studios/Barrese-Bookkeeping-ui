import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import {
    JWT_SECRET,
    PROTECTED_PAGES,
    AUTH_PAGES,
    SUB_CTA_PAGES
} from '@/utilities/constants'
import { decodeCachedToken } from '@/utilities/token'
import { GET_LOGGED_IN_USER } from '@/lib/gql/queries/users'
import { setProfile } from '@/lib/redux/slices/user'
import { GET_INITIAL_CMS } from '@/lib/gql/queries/cms'
import { CMS_LABELS } from '@/lib/redux/slices/cms'
import {
    setCmsLoading,
    setCmsId,
    setCallToAction,
    setAbout,
    setDashboardRoutes,
    setFaqs,
    setFooter,
    setLanding,
    setNewsletterRecords,
    setNewsletterUsers,
    setServices
} from '@/lib/redux/slices/exports'
import { showBanner } from '@/lib/redux/slices/banner'
import DashboardPage from './dashboard'
import Nav from '../nav'
import CallToAction from '../CallToAction'
import Banner from '../banner'
import Footer from '../footer'

import { StyledMain } from './PageWrapper.styles'

const PageWrapper = ({ children }: { children: any }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { profile } = useSelector((state: any) => state.user)

    const basePath = router.pathname.split('/')[1]
    const isPageIncluded = (pages: string[]) => pages.includes(basePath)

    const rerouteInvalidUser = () => {
        const redirectToHome = isPageIncluded(PROTECTED_PAGES)

        if (redirectToHome) {
            router.push('/')
        }
    }

    const [getLoggedInUser] = useLazyQuery(GET_LOGGED_IN_USER, {
        onCompleted({ getLoggedInUser: data }) {
            localStorage.setItem(JWT_SECRET, data.token)

            const profile = { ...data }
            delete profile.__typename
            delete profile.successType
            delete profile.token
            dispatch(setProfile(profile))
        },
        onError(err: any) {
            dispatch(
                showBanner({
                    type: 'Errors',
                    message: 'Invalid token. Please log in again.'
                })
            )
            rerouteInvalidUser()
        }
    })

    useEffect(() => {
        if (!profile._id) {
            const token = decodeCachedToken()

            if (token?.email) {
                getLoggedInUser()
            } else {
                rerouteInvalidUser()
            }
        }
    }, [router])

    const theme = createTheme({
        palette: {
            // mode,
            // ...themeData
        }
    })

    const [getAllCmsContent] = useLazyQuery(GET_INITIAL_CMS, {
        onCompleted({ getAllCmsContent: data }) {
            const cms = { ...data }
            delete cms.__typename
            delete cms.successType

            const {
                DASHBOARD,
                ABOUT,
                CTA,
                FAQS,
                FOOTER,
                LANDING,
                NEWSLETTER,
                SERVICES
            } = CMS_LABELS
            for (const [key, value] of Object.entries(cms) as any) {
                switch (key) {
                    case DASHBOARD:
                        dispatch(setDashboardRoutes(value))
                        break
                    case ABOUT:
                        dispatch(setAbout(value))
                        break
                    case CTA:
                        dispatch(setCallToAction(value))
                        break
                    case FAQS:
                        dispatch(setFaqs(value))
                        break
                    case FOOTER:
                        dispatch(setFooter(value.contactLinks))
                        break
                    case LANDING:
                        dispatch(setLanding(value))
                        break
                    case SERVICES:
                        dispatch(setServices(value))
                        break
                    case NEWSLETTER:
                        dispatch(setNewsletterRecords(value.records))
                        dispatch(setNewsletterUsers(value.users))
                        break
                    default:
                        break
                }
            }
            dispatch(setCmsId(cms._id))
            dispatch(setCmsLoading(false))
        },
        onError(err: any) {
            dispatch(
                showBanner({
                    type: 'Errors',
                    message:
                        'There was an issue getting site content. Please contact me at alan@barrsebookkeeping.com if this issue persists.'
                })
            )

            dispatch(setCmsLoading(false))
        }
    })

    useEffect(() => {
        dispatch(setCmsLoading(true))
        getAllCmsContent()
    }, [])

    const showCTA = !isPageIncluded(SUB_CTA_PAGES)
    const forceMobileNav = isPageIncluded(AUTH_PAGES)
    const isOnDashboard = isPageIncluded(['dashboard'])

    return (
        <ThemeProvider theme={theme}>
            <StyledMain>
                {isOnDashboard ? (
                    <DashboardPage>{children}</DashboardPage>
                ) : (
                    <>
                        <Nav forceMobileNav={forceMobileNav} />
                        {children}
                        {showCTA ? <CallToAction /> : null}
                        <Footer />
                    </>
                )}
                <Banner />
            </StyledMain>
        </ThemeProvider>
    )
}

export default PageWrapper
