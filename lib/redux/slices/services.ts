import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    pageH1: null,
    pageH2: null,
    heroImage: null,
    description: null,
    offerings: null
}

export const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        setServices: (state, { payload }) => {
            state.pageH1 = payload.pageH1
            state.pageH2 = payload.pageH2
            state.heroImage = payload.heroImage
            state.description = payload.description
            state.offerings = payload.offerings
        }
    }
})

export const { setServices } = servicesSlice.actions
export default servicesSlice.reducer
