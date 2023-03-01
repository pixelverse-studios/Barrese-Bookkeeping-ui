import { createSlice } from '@reduxjs/toolkit'

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
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        removeCmsData: state => {
            state.cms = intialCmsState.cms
        }
    }
})

export const { setCmsData, setLoading, removeCmsData } = cmsSlice.actions
export default cmsSlice.reducer
