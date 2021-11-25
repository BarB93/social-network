import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile, updatePhoto } from '../actions/profileAction'

const initialState = {
	isInitial: false,
	isLoading: false,
	error: '',
	profile: null,
	authProfile: null,
	isOpenUpdateStatus: false,
	posts: [],

	isOpenCreatePost: false,

	isUpdatePhotoError: '',
	isUpdatePhotoLoading: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		openUpdateStatus: (state, action) => {
			state.isOpenUpdateStatus = true
		},
		closeUpdateStatus: (state) => {
			state.isOpenUpdateStatus = false
		},

		openCreatePost: (state, action) => {
			state.isOpenCreatePost = true
		},
		closeCreatePost: (state, action) => {
			state.isOpenCreatePost = false
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
			state.isInitial = true
			if (action.meta.arg['initial']) {
				state.authProfile = action.payload
			} else if (action.meta.arg['isAuthUserProfile']) {
				state.authProfile = action.payload
				state.profile = action.payload
			} else {
				state.profile = action.payload
			}
		},
		[fetchProfile.rejected]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},

		//UPDATE PHOTO ##############################
		[updatePhoto.pending.type]: (state) => {
			state.isUpdatePhotoError = ''
			state.isUpdatePhotoLoading = true
		},
		[updatePhoto.fulfilled.type]: (state, action) => {
			state.isUpdatePhotoError = ''
			state.isUpdatePhotoLoading = false

			if (action.payload.resultCode === 0) {
				state.authProfile.photos.small = action.payload.data.photos.small
				state.authProfile.photos.large = action.payload.data.photos.large
				state.profile.photos.small = action.payload.data.photos.small
				state.profile.photos.large = action.payload.data.photos.large
			}
		},
		[updatePhoto.rejected.type]: (state, action) => {
			state.isUpdatePhotoError = action.payload
			state.isUpdatePhotoLoading = false
		},
	},
})

//Actions
export const { openUpdateStatus, closeUpdateStatus, openCreatePost, closeCreatePost } =
	profileSlice.actions

export default profileSlice.reducer
