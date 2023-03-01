import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user'
import bannerReducer from './slices/banner'
import cmsReducer from './slices/cms'

export const store = configureStore({
    reducer: {
        user: userReducer,
        banner: bannerReducer,
        cmsData: cmsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
