import {createSlice} from "@reduxjs/toolkit"

export  const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages: [
            {id: 1, from: true, message: 'Привет', img: 'https://vk.com/images/camera_200.png'},
            {id: 2, from: true, message: 'Ты как', img: 'https://vk.com/images/camera_200.png'},
            {id: 3, from: false, message: 'Все не вернуть обратно', img: 'https://vk.com/images/camera_200.png'},
            {id: 4, from: false, message: 'Кто здесь, не прав...', img: 'https://vk.com/images/camera_200.png'},
            {id: 5, from: true, message: 'Мы узнаем завтра', img: 'https://vk.com/images/camera_200.png'},
        ],
    },
    reducers: {
        addMessage: (state, action) => {
            const newMessage = {
                id: state.messages.length + 1,
                message: action.payload,
                from: true,
                img: 'https://vk.com/images/camera_200.png',
            }

            state.messages.push(newMessage)
        }
    }
})

//Actions
export  const {addMessage} = messageSlice.actions

export default  messageSlice.reducer