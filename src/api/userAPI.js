import {instance} from './api'

export const userAPI = {
    fetchUsers: async ( count = 10, page= 1, friend = false) => {
            const response = await instance.get('/users', {
                params: {
                    friend,
                    count,
                    page,
                }
            })
            return response.data
    }

}
