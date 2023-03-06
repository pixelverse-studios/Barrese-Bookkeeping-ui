import { createSlice } from '@reduxjs/toolkit'

export const CMS_LABELS = {
    DASHBOARD: 'dashboard',
    ABOUT: 'about',
    CTA: 'callToAction',
    FAQS: 'faqs',
    FOOTER: 'footer',
    LANDING: 'landing',
    NEWSLETTER: 'newsletter'
    // NEWSLETTER_USERS: 'newsletterUsers',
    // NEWSLETTER_RECORDS: 'newsletterRecords'
}

export const intialCmsState = {
    cms: {
        _id: '',
        dashboard: null,
        about: null,
        callToAction: null,
        faqs: null,
        footer: null,
        landing: null,
        newsletter: null,
        services: null
    },
    id: '',
    loading: false
}

export const cmsSlice = createSlice({
    name: 'cmsData',
    initialState: intialCmsState,
    reducers: {
        setCmsData: (state, action) => {
            state.loading = false
            state.cms = action.payload
        },
        setCmsId: (state, action) => {
            state.loading = false
            state.cms = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        removeCmsData: state => {
            state.cms = intialCmsState.cms
        }
    }
})

export const { setCmsData, setLoading, removeCmsData, setCmsId } =
    cmsSlice.actions
export default cmsSlice.reducer
