export const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
    messages: [
        {id: 1, from: true, message: 'Привет', img: 'https://vk.com/images/camera_200.png'},
        {id: 2, from: true, message: 'Ты как', img: 'https://vk.com/images/camera_200.png'},
        {id: 3, from: false, message: 'Все не вернуть обратно', img: 'https://vk.com/images/camera_200.png'},
        {id: 4, from: false, message: 'Кто здесь, не прав...', img: 'https://vk.com/images/camera_200.png'},
        {id: 5, from: true, message: 'Мы узнаем завтра', img: 'https://vk.com/images/camera_200.png'},
    ],
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                message: action.payload,
                from: true,
                img: 'https://vk.com/images/camera_200.png',
            }

            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export default messageReducer