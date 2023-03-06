import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    users: null
}

export const newsletterUsersSlice = createSlice({
    name: 'newsletterUsers',
    initialState,
    reducers: {
        setNewsletterUsers: (state, { payload }) => {
            state.users = payload
        }
    }
})

export const { setNewsletterUsers } = newsletterUsersSlice.actions
export default newsletterUsersSlice.reducer
