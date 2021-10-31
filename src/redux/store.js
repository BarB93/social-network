import {configureStore} from "@reduxjs/toolkit"
import {dialogReducer, userReducer, messageReducer, profileReducer} from "./slices";
import {userAPI} from '../api/userService'

const rootReducer = {
    profile: profileReducer,
    message: messageReducer,
    dialog: dialogReducer,
    user: userReducer,
    [userAPI.reducerPath]: userAPI.reducer
}

const store =  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().
            concat(userAPI.middleware)
})

window.store = store

export default store