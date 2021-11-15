import { instance } from './api'

export const authAPI = {
	login: async (args) => {
		const response = await instance.post('/auth/login', {
			body: {
				email: args.email,
				password: args.password,
				rememberMe: args.rememberMe,
				captcha: args.captcha,
			},
		})
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
