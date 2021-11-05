import {createAsyncThunk} from '@reduxjs/toolkit'
import {userAPI} from '../../api/userAPI'

export const createFetchUsersThunk = (type) => {
    return createAsyncThunk(
        type,
        async (args, thunkAPI) => {
            try {
                return await userAPI.fetchUsers(args)
            } catch (e) {
                return thunkAPI.rejectWithValue('Произошла ошибка во время загрузки пользователей')
            }
        }
    )
}

export const createFollowUserThunk = (type) => {
    return createAsyncThunk(
        type,
        async (userId, thunkAPI) => {
            try {
                return await userAPI.followUser(userId)
            } catch (e) {
                return thunkAPI.rejectWithValue('Произошла ошибка при добавлении в друзья')
            }
        }
    )
}

export const createUnfollowUserThunk = (type) => {
    return createAsyncThunk(
        type,
        async (userId, thunkAPI) => {
            try {
                return await userAPI.unfollowUser(userId)
            } catch (e) {
                return thunkAPI.rejectWithValue('Произошла ошибка при удалении из друзей')
            }
        }
    )
}