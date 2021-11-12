import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0',
		prepareHeaders: (headers) => {
			headers.set('API-KEY', '56da4b49-e130-401a-8eee-bc205b915589')
			return headers
		},
	}),
	tagTypes: ['User'],
	endpoints: (build) => ({
		fetchAllUsers: build.query({
			query: (limit = 15, friend = false) => ({
				url: '/users',
				params: {
					count: limit,
					friend,
				},
			}),
		}),
		followOnUser: build.mutation({
			query: (user) => ({
				url: `/follow/${user.id}`,
				method: 'POST',
			}),
		}),
	}),
})
