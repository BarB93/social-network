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
import {userAPI} from '../api/userService'

const rootReducer = {
    header: headerReducer,
    profile: profileReducer,
    myProfile: myProfileReducer,
    message: messageReducer,
    dialog: dialogReducer,
    user: userReducer,
    friend: friendReducer,
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer
}

const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userAPI.middleware)
})

window.store = store

export default store