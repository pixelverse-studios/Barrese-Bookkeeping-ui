import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    contactLinks: null
}

export const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        setLanding: (state, { payload }) => {
            state.contactLinks = payload
        }
    }
})

export const { setLanding } = landingSlice.actions
export default landingSlice.reducer
