import {createSlice} from '@reduxjs/toolkit'
import {fetchAllFriends, followFriend, unfollowFriend} from '../actions/friendAction'
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

    subscribeLoading: false,
    subscribeError: '',
    friendIdForChange: 0,
}

export const friendSlice = createSlice({
    name: 'friend',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        resetFriends: (state) => {
            state.friends = []
            state.currentPage = 1
            state.isInit = false
        }
    },
    extraReducers: {
        //FETCH
        [fetchAllFriends.pending.type]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [fetchAllFriends.fulfilled.type]: (state, action) => {
            if(!state.isInit) state.isInit = true
            state.isLoading = false
            state.friends.push(...action.payload.items)
        debugger
            state.totalFriends = action.payload.totalCount
            state.totalPages = computeTotalItems(action.payload.totalCount, state.limit)
            state.error = ''
        },
        [fetchAllFriends.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },

        //FOLLOW
        [followFriend.pending.type]: (state, action) => {
            state.subscribeError = ''
            state.friendIdForChange = action.meta.arg
            state.subscribeLoading = true
        },
        [followFriend.fulfilled.type]: (state, action) => {
            state.subscribeLoading = false
            if(!action.payload.resultCode) {
                const userId = action.meta.arg
                state.friends = state.friends.map(p => p.id === userId ? {...p, followed: true } : p)
            }
        },
        [followFriend.rejected.type]: (state, action) => {
            state.error = action.payload
        },

        //UNFOLLOW
        [unfollowFriend.pending.type]: (state, action) => {
            state.subscribeError = ''
            state.friendIdForChange = action.meta.arg
            state.subscribeLoading = true
        },
        [unfollowFriend.fulfilled.type]: (state, action) => {
            state.subscribeLoading = false
            state.subscribeError = ''
            if(!action.payload.resultCode) {
                const userId = action.meta.arg
                state.friends = state.friends.map(p => p.id === userId? {...p, followed: false } : p)
            }
        },
        [unfollowFriend.rejected.type]: (state, action) => {
            state.subscribeError = action.payload
        },
    }
})

export const {setCurrentPage, resetFriends} = friendSlice.actions
export default friendSlice.reducer