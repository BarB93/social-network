import { instance } from './api'

export const profileAPI = {
	fetchProfile: async (id) => {
		const response = await instance.get(`/profile/${id}`)
		return response.data
	},
	updatePhoto: async (body) => {
		const response = await instance.put('/profile/photo', body, {
			headers: { 'Content-Type': 'multipart/form-data' },
		})
		return response.data
	},
}
