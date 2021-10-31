import axios from 'axios'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {userAPI} from "../../api/userAPI";

export const fetchUsers = createAsyncThunk(
    'user/FetchAll',
    async (args = {friend: false, count: 15, page: 1}, thunkAPI) => {
        try {
            return await userAPI.fetchUsers(args.count,args.page, args.friend)
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка во время загрузки пользователей')
        }
    }
)