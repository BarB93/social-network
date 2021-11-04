import {createSlice} from '@reduxjs/toolkit'
import {authMe, login} from '../actions/authAction'

const initialState = {
    initialApp: false,
    userId: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth:false,
    wrongData: false,
    error: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {
        //login ############################
        [login.pending.type]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [login.fulfilled.type]: (state, action) => {
            state.isLoading = false
            if(!action.payload.resultCode) {
                state.isAuth = true
                state.error = ''
                state.wrongData = false
            } else {
                state.wrongData = true
            }
        },
        [login.rejected.type]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        //authMe ############################
        [authMe.pending.type]: (state) => {
            state.isLoading = true
            state.error = ''
        },
        [authMe.fulfilled.type]: (state, action) => {
            state.isLoading = false

            if(!action.payload.resultCode) {
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


    }
})

export default authSlice.reducer