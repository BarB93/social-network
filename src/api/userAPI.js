import {instance} from './api'

export const userAPI = {
    fetchUsers: async ({count, page, friend}) => {
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
