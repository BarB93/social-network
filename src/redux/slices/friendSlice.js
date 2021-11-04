import {createSlice} from '@reduxjs/toolkit'
import {fetchAllFriends} from '../actions/friendAction'
import {computeTotalItems} from '../../utils/pagination'

const initialState = {
    isInit: false,
    friends: [],
    isLoading: false,
    error: '',

    totalFriends: 0,
    limit: 15,
    currentPage: 1,
    totalPages:10,
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: {
        [fetchAllFriends.pending.type]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [fetchAllFriends.fulfilled.type]: (state, action) => {
            if(!state.isInit) state.isInit = true
            state.isLoading = false
            state.friends.push(...action.payload.items)

            state.totalFriends = action.payload.totalCount
            state.totalPages = computeTotalItems(action.payload.totalCount, state.limit)
            state.error = ''
        },
        [fetchAllFriends.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const {setCurrentPage} = friendSlice.actions
export default friendSlice.reducer