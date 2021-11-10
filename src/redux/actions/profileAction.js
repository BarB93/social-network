import {createAsyncThunk} from '@reduxjs/toolkit'
import {profileAPI} from "../../api/profileAPI";

export const fetchProfile = createAsyncThunk(
    'profile/FetchProfile',
    async (id, thunkAPI) => {
        try {
            return  await profileAPI.fetchProfile(id)
        } catch (e) {
            return  thunkAPI.rejectWithValue('Произошла ошибка при загрузке профиля')
        }
    }
)



