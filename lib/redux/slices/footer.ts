import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    contactLinks: null
}

export const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setFooter: (state, { payload }) => {
            state.contactLinks = payload
        }
    }
})

export const { setFooter } = footerSlice.actions
export default footerSlice.reducer
