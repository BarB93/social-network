import axios from 'axios'


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        'API-KEY': '56da4b49-e130-401a-8eee-bc205b915589'
    }
})


