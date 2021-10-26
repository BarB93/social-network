import {createSlice} from '@reduxjs/toolkit'

export const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        friends: [],
        users: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        follow: (state, action) => {
            state.users = state.users.map(p => p.id === action.payload ? {...p, followed: true } : p)
        },
        unfollow: (state, action) => {
            state.users = state.users.map(p => p.id === action.payload ? {...p, followed: false } : p)
        }
    }
})

//Actions
export const {follow, unfollow, setUsers} = friendsSlice.actions

export default  friendsSlice.reducer