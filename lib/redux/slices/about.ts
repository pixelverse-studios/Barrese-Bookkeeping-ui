import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    profilePic: null,
    backgroundInfo: null,
    role: null,
    title: null,
    header: null,
    subHeader: null,
    heroImage: null
}

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAbout: (state, { payload }) => {
            state.profilePic = payload.profilePic
            state.backgroundInfo = payload.backgroundInfo
            state.role = payload.role
            state.title = payload.title
            state.header = payload.header
            state.subHeader = payload.subHeader
            state.heroImage = payload.heroImage
        }
    }
})

export const { setAbout } = aboutSlice.actions
export default aboutSlice.reducer
