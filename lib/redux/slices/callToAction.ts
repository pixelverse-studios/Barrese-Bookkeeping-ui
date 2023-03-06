import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    image: null,
    heading: null,
    description: null,
    buttonLabel: null
}

export const ctaSlice = createSlice({
    name: 'callToAction',
    initialState,
    reducers: {
        setCallToAction: (state, { payload }) => {
            state.image = payload.image
            state.heading = payload.heading
            state.description = payload.description
            state.buttonLabel = payload.buttonLabel
        }
    }
})

export const { setCallToAction } = ctaSlice.actions
export default ctaSlice.reducer
