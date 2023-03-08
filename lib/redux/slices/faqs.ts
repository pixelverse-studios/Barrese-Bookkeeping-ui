import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    pageH1: null,
    pageH2: null,
    heroImage: null,
    qAndA: null
}

export const faqsSlice = createSlice({
    name: 'faqs',
    initialState,
    reducers: {
        setFaqs: (state, { payload }) => {
            state.pageH1 = payload.pageH1
            state.pageH2 = payload.pageH2
            state.heroImage = payload.heroImage
            state.qAndA = payload.qAndA
        }
    }
})

export const { setFaqs } = faqsSlice.actions
export default faqsSlice.reducer
