import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import bannerReducer from './slices/banner'
import cmsReducer from './slices/cms'
import callToAction from './slices/callToAction'
import dashboard from './slices/dashboard'
import about from './slices/about'
import faqs from './slices/faqs'
import footer from './slices/footer'
import landing from './slices/landing'
import newsletterRecords from './slices/newsletterRecords'
import newsletterUsers from './slices/newsletterUsers'

export const store = configureStore({
    reducer: {
        user: userReducer,
        banner: bannerReducer,
        cmsData: cmsReducer,
        callToAction,
        dashboard,
        about,
        faqs,
        footer,
        landing,
        newsletterRecords,
        newsletterUsers
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
