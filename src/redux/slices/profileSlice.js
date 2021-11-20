import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile, updatePhoto } from '../actions/profileAction'

const initialState = {
	isInitial: false,
	isLoading: false,
	error: '',
	profile: null,
	myProfile: null,
	isOpenUpdateStatus: false,
	posts: [
		{
			id: 1,
			userId: 14640,
			text: 'Едва ли ни единственное, что можно сказать твердо о том, как прожить классную жизнь — надо обязательно делать то, что нужно…и не делать того, чего не нужно. От этого и будем отталкиваться.',
			date: 1559854800000,
			likeCount: 7,
			usersIdLiked: [1234, 312, 454, 4534],
		},
		{
			id: 2,
			userId: 14640,
			text: 'Да. Теперь я официально могу танцевать, когда моё приложение работает, и плакать, когда не работает, потому что, теперь я работаю из дома. Раньше мне приходилось скрывать свои чувства.',
			date: 1637235449721,
			likeCount: 13,
			usersIdLiked: [5454, 654, 645, 756, 7456, 756, 765],
		},
		{
			id: 3,
			userId: 14640,
			text: 'Чтобы понять рекурсию, нужно сперва понять рекурсию.',
			date: 1637269200000,
			likeCount: 13,
			usersIdLiked: [5454, 654, 645, 756, 7456, 756, 765, 545, 6532, 5344],
		},
	],

	isUpdatePhotoError: '',
	isUpdatePhotoLoading: false,
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts.push(action.payload)
		},
		toggleLikeToPost: (state, action) => {
			const { postId, userId } = action.payload

			state.posts.forEach((p) => {
				if (p.id === postId) {
					let isInclude = false
					p.usersIdLiked = p.usersIdLiked.filter((likeId) => {
						if (likeId === userId) isInclude = true
						return likeId !== userId
					})
					if (!isInclude) p.usersIdLiked.push(userId)
				}
			})
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
			state.isInitial = true
			if (action.meta.arg['initial']) {
				state.myProfile = action.payload
			} else if (action.meta.arg['isAuthUserProfile']) {
				state.myProfile = action.payload
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
				state.myProfile.photos.small = action.payload.data.photos.small
				state.myProfile.photos.large = action.payload.data.photos.large
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
export const {
	addPost,
	openUpdateStatus,
	closeUpdateStatus,
	toggleLikeToPost,
} = profileSlice.actions

export default profileSlice.reducer
