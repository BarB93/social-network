import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
        ],
    },
    reducers: {
        addPost: (state,action) => {
            state.posts.push(action.payload)
        }
    }
})

//Actions
export const {addPost} = profileSlice.actions

export default profileSlice.reducer