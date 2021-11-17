import { createSlice } from '@reduxjs/toolkit'

import { fetchMyProfile } from '../actions/myProfileAction'

const initialState = {
	isLoading: false,
	error: '',
	myProfile: null,
}

export const myProfileSlice = createSlice({
	name: 'profile',
	initialState,
	extraReducers: {
		[fetchMyProfile.pending.type]: (state) => {
			state.error = ''
			state.isLoading = true
		},
		[fetchMyProfile.fulfilled]: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.myProfile = action.payload
		},
		[fetchMyProfile.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default myProfileSlice.reducer
