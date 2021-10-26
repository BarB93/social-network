import messageReducer from './messageSlice'
import profileReducer from './profileSlice'
import dialogsReducer from './dialodsSlice'
import friendsReducer from './friendsSlice'

export const rootReducer = {
    profile: profileReducer,
    message: messageReducer,
    dialogs: dialogsReducer,
    friends: friendsReducer,
}