import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '5f2d5af9-d6f0-4b7d-8e20-5a0ae84fdc07',
	},
	withCredentials: true,
})
