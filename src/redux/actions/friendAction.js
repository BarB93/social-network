import {createAsyncThunk} from '@reduxjs/toolkit'
import {userAPI} from '../../api/userAPI'


export const fetchAllFriends = createAsyncThunk(
    'friend/fetchFriends',
    async  (args, thunkApi) => {
    try {
        return await userAPI.fetchUsers(args)
    }catch (e) {
        return thunkApi.rejectWithValue('Произошла ошибка при загрузке пользователей')
    }
})