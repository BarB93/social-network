import {instance} from './api'

export const authAPI = {
    login: async (email, password) => {
       const response = await instance.post('/auth/login', {
            body: {
                email,
                password
            }
        })
        return response.data
    },
    authMe: async () => {
        const response = await instance.get('/auth/me')
        return response.data
    }
}