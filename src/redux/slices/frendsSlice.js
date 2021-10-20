import {createSlice} from '@reduxjs/toolkit'

export const frendsSlice = createSlice({
    name: 'frends',
    initialState: {
        frends: [],
        users: [
            {id: 1, fullName:'Dmitry', followed: true, status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'}},
            {id: 2, fullName:'Andrey', followed: false, status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}},
            {id: 3, fullName:'Boirs', followed: false, status: 'I am boss', location: {city: 'Sans Piterspurg', country: 'Russia'}},
            {id: 4, fullName:'Sveta', followed: false, status: 'I am boss', location: {city: 'Cancun', country: 'Mexico'}},
            {id: 5, fullName:'Natali', followed: true, status: 'I am boss', location: {city: 'Samara', country: 'Russia'}},
            {id: 6, fullName:'Sasha', followed: true, status: 'I am boss', location: {city: 'Kiev', country: 'Ukraine'}},
        ],
    },
    reducers: {
        follow: (state, action) => {
            state.people = state.people.map(p => p.id === action.payload ? {...p, followed: true } : p)
        },
        unfollow: (state, action) => {
            state.people = state.people.map(p => p.id === action.payload ? {...p, followed: false } : p)
        }
    }
})

//Actions
export const {follow, unfollow} = frendsSlice.actions

export default  frendsSlice.reducer