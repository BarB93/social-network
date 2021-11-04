import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isMenuOpen: false,
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false
        }
    }
})

export const {closeMenu, toggleMenu} = headerSlice.actions
export default headerSlice.reducer