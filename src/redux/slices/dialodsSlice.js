import {createSlice} from '@reduxjs/toolkit'

export  const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogs: [
            {id: 1, name: 'Борис'},
            {id: 2, name: 'Лариса'},
            {id: 3, name: 'Андрей'},
            {id: 4, name: 'Натали'},
            {id: 5, name: 'Гия'},
            {id: 6, name: 'Николь'},
        ],

    },
    reducers: {
        addDialog: (state, action) => {
            state.dialogs.push(action.payload)
        }
    }
})

//Actions
export  const {addDialog} = dialogsSlice.actions

export default  dialogsSlice.reducer