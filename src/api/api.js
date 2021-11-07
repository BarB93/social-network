import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd370c2a1-ad82-44da-ba2a-b8511ab27fa7'
    },
    withCredentials:true,

})


