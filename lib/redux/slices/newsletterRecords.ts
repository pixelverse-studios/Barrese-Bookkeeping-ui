import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    records: null
}

export const newsletterRecordsSlice = createSlice({
    name: 'newsletterRecords',
    initialState,
    reducers: {
        setNewsletterRecords: (state, { payload }) => {
            state.records = payload
        }
    }
})

export const { setNewsletterRecords } = newsletterRecordsSlice.actions
export default newsletterRecordsSlice.reducer
