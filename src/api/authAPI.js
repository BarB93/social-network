import { instance } from './api'

export const authAPI = {
	login: async (args) => {
		const response = await instance.post('/auth/login', { ...args.loginData })
		return response.data
	},
	authMe: async () => {
		const response = await instance.get('/auth/me')
		return response.data
	},
	logout: async () => {
		const response = await instance.delete('/auth/login')
		return response.data
	},
}
