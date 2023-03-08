import { createSlice } from '@reduxjs/toolkit'

export const CMS_LABELS = {
    DASHBOARD: 'dashboard',
    ABOUT: 'about',
    CTA: 'callToAction',
    FAQS: 'faqs',
    FOOTER: 'footer',
    LANDING: 'landing',
    NEWSLETTER: 'newsletter'
}

export const intialCmsState = {
    id: '',
    loading: false
}

export const cmsSlice = createSlice({
    name: 'cmsData',
    initialState: intialCmsState,
    reducers: {
        setCmsId: (state, action) => {
            state.loading = false
            state.id = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading, setCmsId } = cmsSlice.actions
export default cmsSlice.reducer
