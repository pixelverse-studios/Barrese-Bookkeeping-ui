import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    heroImage: '',
    heroBannerH1: '',
    heroBannerH2: '',
    subtext: '',
    header: '',
    subHeader: ''
}

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        setLanding: (state, { payload }) => {
            state.heroImage = payload.heroImage
            state.heroBannerH1 = payload.heroBannerH1
            state.heroBannerH2 = payload.heroBannerH2
            state.subtext = payload.subtext
            state.header = payload.header
            state.subHeader = payload.subHeader
        }
    }
})

export const { setLanding } = landingSlice.actions
export default landingSlice.reducer
