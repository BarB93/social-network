import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers, followUser, unfollowUser } from '../actions/userAction'
import { computeTotalItems } from '../../utils/pagination'

const initialState = {
	isInit: false,
	users: [],
	isLoading: false,
	error: '',

	totalUsers: 0,
	limit: 15,
	currentPage: 1,
	totalPages: 10,

	subscribeError: '',
	subscribingInProgress: [],
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
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
		//FETCH USERS
		[fetchUsers.pending.type]: (state) => {
			state.isLoading = true
		},
		[fetchUsers.fulfilled.type]: (state, action) => {
			state.isInit = true
			state.isLoading = false
			state.totalPages = computeTotalItems(
				action.payload.totalCount,
				state.limit,
			)
			state.users.push(...action.payload.items)
			state.totalUsers = action.payload.totalCount
			state.error = ''
		},
		[fetchUsers.rejected.type]: (state, action) => {
			state.error = action.payload
			state.isLoading = false
		},

		//FOLLOW
		[followUser.pending.type]: (state, action) => {
			state.subscribeError = ''
			state.subscribingInProgress.push(action.meta.arg)
		},
		[followUser.fulfilled.type]: (state, action) => {
			state.subscribeError = ''
			const userId = action.meta.arg
			state.subscribingInProgress = state.subscribingInProgress.filter(
				(id) => id !== userId,
			)
			if (!action.payload.resultCode) {
				state.users = state.users.map((p) =>
					p.id === userId ? { ...p, followed: true } : p,
				)
			}
		},
		[followUser.rejected.type]: (state, action) => {
			state.error = action.payload
		},

		//UNFOLLOW
		[unfollowUser.pending.type]: (state, action) => {
			state.subscribeError = ''
			state.subscribingInProgress.push(action.meta.arg)
		},
		[unfollowUser.fulfilled.type]: (state, action) => {
			state.subscribeError = ''
			const userId = action.meta.arg
			state.subscribingInProgress = state.subscribingInProgress.filter(
				(id) => id !== userId,
			)
			if (!action.payload.resultCode) {
				state.users = state.users.map((p) =>
					p.id === userId ? { ...p, followed: false } : p,
				)
			}
		},
		[unfollowUser.rejected.type]: (state, action) => {
			state.subscribeError = action.payload
		},
	},
})

//Actions
export const { setCurrentPage, resetUsers } = userSlice.actions

export default userSlice.reducer
