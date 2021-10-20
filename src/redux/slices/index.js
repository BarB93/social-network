import messageReducer from './messageSlice'
import profileReducer from './profileSlice'
import dialogsReducer from './dialodsSlice'
import frendsReducer from './frendsSlice'

export const rootReducer = {
    profile: profileReducer,
    message: messageReducer,
    dialogs: dialogsReducer,
    frends: frendsReducer,
}