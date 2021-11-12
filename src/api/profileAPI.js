import { instance } from './api'

export const profileAPI = {
	fetchProfile: async (id) => {
		const response = await instance.get(`/profile/${id}`)
		return response.data
	},
	fetchStatus: async (id) => {
		const response = await instance.get(`/profile/status/${id}`)
		return response.data
	},
}
