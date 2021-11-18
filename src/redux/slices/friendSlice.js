import { createSlice } from '@reduxjs/toolkit'
import {
	fetchAllFriends,
	followFriend,
	unfollowFriend,
} from '../actions/friendAction'
import { computeTotalItems } from '../../utils/pagination'

const initialState = {
	isInit: false,
	friends: [],
	isLoading: false,
	error: '',

	totalFriends: 0,
	limit: 15,
	currentPage: 1,
	totalPages: 10,

	subscribeError: '',
	subscribingInProgress: [],
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
		},
	},
	extraReducers: {
		//FETCH
		[fetchAllFriends.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[fetchAllFriends.fulfilled.type]: (state, action) => {
			state.isInit = true
			state.isLoading = false
			state.friends.push(...action.payload.items)

			state.totalFriends = action.payload.totalCount
			state.totalPages = computeTotalItems(
				action.payload.totalCount,
				state.limit,
			)
			state.error = ''
		},
		[fetchAllFriends.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},

		//FOLLOW
		[followFriend.pending.type]: (state, action) => {
			state.subscribeError = ''
			state.subscribingInProgress.push(action.meta.arg)
		},
		[followFriend.fulfilled.type]: (state, action) => {
			state.subscribeError = ''
			const userId = action.meta.arg
			state.subscribingInProgress = state.subscribingInProgress.filter(
				(id) => id !== userId,
			)
			if (!action.payload.resultCode) {
				state.friends = state.friends.map((p) =>
					p.id === userId ? { ...p, followed: true } : p,
				)
			}
		},
		[followFriend.rejected.type]: (state, action) => {
			state.error = action.payload
		},

		//UNFOLLOW
		[unfollowFriend.pending.type]: (state, action) => {
			state.subscribeError = ''
			state.subscribingInProgress.push(action.meta.arg)
		},
		[unfollowFriend.fulfilled.type]: (state, action) => {
			const userId = action.meta.arg
			state.subscribingInProgress = state.subscribingInProgress.filter(
				(id) => id !== userId,
			)
			state.subscribeError = ''
			if (!action.payload.resultCode) {
				state.friends = state.friends.map((p) =>
					p.id === userId ? { ...p, followed: false } : p,
				)
			}
		},
		[unfollowFriend.rejected.type]: (state, action) => {
			state.subscribeError = action.payload
		},
	},
})

export const { setCurrentPage, resetFriends } = friendSlice.actions
export default friendSlice.reducer
