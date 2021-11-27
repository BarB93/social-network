import { instance } from './api'

export const userAPI = {
	fetchUsers: async ({ count, page, friend = false, term = '' }) => {
		const response = await instance.get('/users', {
			params: {
				friend,
				count,
				page,
				term,
			},
		})
		return response.data
	},
	followUser: async (userId) => {
		const response = await instance.post(`/follow/${userId}`)
		return response.data
	},
	unfollowUser: async (userId) => {
		const response = await instance.delete(`/follow/${userId}`)
		return response.data
	},
}
