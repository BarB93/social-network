import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userService = createApi({
	reducerPath: 'userService',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0',
		prepareHeaders: (headers) => {
			headers.set('API-KEY', '5f2d5af9-d6f0-4b7d-8e20-5a0ae84fdc07')
			return headers
		},
		mode: 'cors',
		credentials: 'include',
	}),
	tagTypes: ['User', 'Subscription'],
	endpoints: (build) => ({
		fetchUsers: build.query({
			query: ({ limit, friend } = { limit: 15, friend: false }) => {
				return {
					url: '/users',
					params: {
						count: limit,
						friend,
					},
				}
			},
			keepUnusedDataFor: 5,
		}),
		fetchCheckSubscription: build.query({
			query: (userId) => ({
				url: `/follow/${userId}`,
			}),
			providesTags: ['Subscription'],
		}),
		unsubscribeFromUser: build.mutation({
			query: (userId) => ({
				url: `/follow/${userId}`,
				method: 'DELETE',
			}),
			transformResponse: (response) => {
				return response.data
			},
			invalidatesTags: ['Subscription'],
		}),
		subscribeOnUser: build.mutation({
			query: (userId) => ({
				url: `/follow/${userId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Subscription'],
		}),
	}),
})
