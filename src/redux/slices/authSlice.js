import { createSlice } from '@reduxjs/toolkit'
import { authMe, login, logout } from '../actions/authAction'

const initialState = {
	initialApp: false,
	userId: null,
	email: null,
	login: null,
	isLoading: false,
	isAuth: false,
	wrongData: false,
	error: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: {
		//login ############################
		[login.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[login.fulfilled.type]: (state, action) => {
			state.isLoading = false
			const { callbackOnEndRequest } = action.meta.arg
			callbackOnEndRequest()
			if (!action.payload.resultCode) {
				state.isAuth = true
				state.error = ''
				state.wrongData = false
			} else {
				state.wrongData = 'Неправильный email или пароль'
			}
		},
		[login.rejected.type]: (state, action) => {
			state.isLoading = false
			state.wrongData = ''
			state.error = action.payload
		},

		//authMe ############################
		[authMe.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[authMe.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.isInit = true
			if (!action.payload.resultCode) {
				state.initialApp = true
				state.isAuth = true
				state.userId = action.payload.data.id
				state.email = action.payload.data.email
				state.login = action.payload.data.login
			}
		},
		[authMe.rejected.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},

		//logout ############################
		[logout.pending.type]: (state) => {
			state.isLoading = true
			state.error = ''
		},
		[logout.fulfilled.type]: (state, action) => {
			state.isLoading = false
			state.error = ''

			if (action.payload.resultCode === 0) {
				state.isAuth = false
				state.email = null
				state.userId = null
			}
		},
		[logout.pending.type]: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default authSlice.reducer
