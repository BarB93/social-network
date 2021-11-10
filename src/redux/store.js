import {configureStore} from "@reduxjs/toolkit"
import {
    dialogReducer,
    userReducer,
    messageReducer,
    profileReducer,
    authReducer,
    myProfileReducer,
    headerReducer, friendReducer
} from './slices'
import {userAPI} from '../api/services/userService'
import {profileAPI} from '../api/services/profileService'



const rootReducer = {
    header: headerReducer,
    profile: profileReducer,
    myProfile: myProfileReducer,
    message: messageReducer,
    dialog: dialogReducer,
    user: userReducer,
    friend: friendReducer,
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [profileAPI.reducerPath]: profileAPI.reducer,
}

const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware).concat(profileAPI.middleware)
})

window.store = store

export default store