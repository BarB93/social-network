import profileReducer from "./reducers/profile-reducer";
import messageReducer from "./reducers/message-reducer";

export const ADD_POST = 'ADD_POST'
export const ADD_MESSAGE = 'ADD_MESSAGE'

const store = {
    _state: {
        profile: {
            posts: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
            ],
        },
        dialog: {
            dialogs: [
                {id: 1, name: 'Борис'},
                {id: 2, name: 'Лариса'},
                {id: 3, name: 'Андрей'},
                {id: 4, name: 'Натали'},
                {id: 5, name: 'Гия'},
                {id: 6, name: 'Николь'},
            ],
        },
        message: {
            messages: [
                {id: 1, from: true, message: 'Привет', img: 'https://vk.com/images/camera_200.png'},
                {id: 2, from: true, message: 'Ты как', img: 'https://vk.com/images/camera_200.png'},
                {id: 3, from: false, message: 'Все не вернуть обратно', img: 'https://vk.com/images/camera_200.png'},
                {id: 4, from: false, message: 'Кто здесь, не прав...', img: 'https://vk.com/images/camera_200.png'},
                {id: 5, from: true, message: 'Мы узнаем завтра', img: 'https://vk.com/images/camera_200.png'},
            ],
        }
    },
    _subscriber() {
        console.log('no observers!')
    },
    _addMessage(text) {
        const message = {
            id: this._state.message.messages.length + 1,
            message: text,
            from: true,
            img: 'https://vk.com/images/camera_200.png',
        }
        this._state.message.messages.push(message)
        this._subscriber(this)
    },
    _addNewPost(text) {
        this._state.profile.posts.push(text)
        this._subscriber(this)
    },

    getState() {

        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },


    dispatch(action) {

        this._state.profile = profileReducer(this._state.profile,action)
        this._state.message = messageReducer(this._state.message,action)

       this._subscriber(this)
    },
}

window.store = store

// let rerenderEntireTree = () => {}

// const state = {
//     profile: {
//         posts: [
//             'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
//             'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
//             'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
//             'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, quaerat!',
//         ],
//     },
//     dialog: {
//         dialogs: [
//             {id: 1, name:'Борис'},
//             {id: 2, name: 'Лариса'},
//             {id: 3, name: 'Андрей'},
//             {id: 4, name: 'Натали'},
//             {id: 5, name: 'Гия'},
//             {id: 6, name: 'Николь'},
//         ],
//     },
//     message: {
//         messages: [
//             {id: 1, from: true,  message: 'Привет', img: 'https://vk.com/images/camera_200.png'},
//             {id: 2, from: true,  message: 'Ты как', img: 'https://vk.com/images/camera_200.png'},
//             {id: 3, from: false, message: 'Все не вернуть обратно', img: 'https://vk.com/images/camera_200.png'},
//             {id: 4, from: false, message: 'Кто здесь, не прав...', img: 'https://vk.com/images/camera_200.png'},
//             {id: 5, from: true,  message: 'Мы узнаем завтра', img: 'https://vk.com/images/camera_200.png'},
//         ],
//     }
//
// }
//
//
// export const addNewPost = (text) => {
//     console.log('In addNewPost',text)
//     state.profile.posts.push(text)
//     rerenderEntireTree(state)
// }
//
// export  const addMessage = (text) => {
//     const message = {
//         id: state.message.messages.length + 1,
//         message: text,
//         from: true,
//         img: 'https://vk.com/images/camera_200.png',
//     }
//     state.message.messages.push(message)
//     rerenderEntireTree(state)
// }
//
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer
// }

export default store