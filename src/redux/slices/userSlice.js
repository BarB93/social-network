import {createSlice} from '@reduxjs/toolkit'
import {fetchUsers} from "../actions/userAction";
import {computeTotalItems} from "../../utils/pagination";

const initialState = {
    isInit: false,
    users: [],
    isLoading: false,
    error: '',

    totalUsers: 0,
    limit: 15,
    currentPage: 1,
    totalPages: 10,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        follow: (state, action) => {
            state.users = state.users.map(p => p.id === action.payload ? {...p, followed: true } : p)
        },
        unfollow: (state, action) => {
            state.users = state.users.map(p => p.id === action.payload ? {...p, followed: false } : p)
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        resetUsers: (state) => {
            state.users = []
            state.currentPage = 1
            state.isInit = false
        },
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action) => {
            if(!state.isInit) state.isInit = true
            state.totalPages = computeTotalItems(action.payload.totalCount, state.limit)
            state.users.push(...action.payload.items)
            state.totalUsers = action.payload.totalCount
            state.error = ''
            state.isLoading = false
        },
        [fetchUsers.rejected.type]: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

//Actions
export const {follow, unfollow, setCurrentPage, resetUsers} = userSlice.actions

export default  userSlice.reducer