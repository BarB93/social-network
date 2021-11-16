import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from '../actions/profileAction'

const initialState = {
	isLoading: false,
	error: '',
	profile: null,
	isOpenUpdateStatus: false,
	posts: [
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
	],
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload)
		},
		openUpdateStatus: (state, action) => {
			state.isOpenUpdateStatus = true
		},
		closeUpdateStatus: (state) => {
			state.isOpenUpdateStatus = false
		},
	},
	extraReducers: {
		//FETCH PROFILE ##############################
		[fetchProfile.pending.type]: (state) => {
			state.error = ''
			state.isLoading = true
		},
		[fetchProfile.fulfilled]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.profile = action.payload
		},
		[fetchProfile.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
		//FETCH STATUS ##############################
	},
})

//Actions
export const { addPost, openUpdateStatus, closeUpdateStatus } =
	profileSlice.actions

export default profileSlice.reducer
