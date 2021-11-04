import {createAsyncThunk} from '@reduxjs/toolkit'
import {authAPI} from '../../api/authAPI'

export const login = createAsyncThunk(
    'auth/login',
    async (args, thunkAPI) => {
        try {
            return  await authAPI.login(args.email, args.password)
        }catch (e) {
            return thunkAPI.rejectWithValue('Неправильный логин или пароль')
        }
    }
)

export const authMe = createAsyncThunk(
    'auth/authMe',
    async (args, thunkAPI) => {
        try {
            const response =  await authAPI.authMe()
            return response
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при авторизации')
        }
    }
)