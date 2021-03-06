import { configureStore } from '@reduxjs/toolkit'
import {
	dialogReducer,
	userReducer,
	profileReducer,
	authReducer,
	headerReducer,
	friendReducer,
} from './slices'
import { userService } from '../api/services/userService'
import { profileService } from '../api/services/profileService'

const rootReducer = {
	header: headerReducer,
	profile: profileReducer,
	dialog: dialogReducer,
	user: userReducer,
	friend: friendReducer,
	auth: authReducer,
	[userService.reducerPath]: userService.reducer,
	[profileService.reducerPath]: profileService.reducer,
}

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userService.middleware).concat(profileService.middleware),
})

window.store = store

export default store
