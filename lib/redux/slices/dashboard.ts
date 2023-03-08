import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    routes: []
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setDashboardRoutes: (state, { payload }) => {
            state.routes = payload
        }
    }
})

export const { setDashboardRoutes } = dashboardSlice.actions
export default dashboardSlice.reducer
