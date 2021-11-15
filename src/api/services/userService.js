import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userAPI = createApi({
	reducerPath: 'userAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0',
		prepareHeaders: (headers) => {
			headers.set('API-KEY', '5f2d5af9-d6f0-4b7d-8e20-5a0ae84fdc07')
			return headers
		},
	}),
	tagTypes: ['User', 'Subscription'],
	endpoints: (build) => ({
		fetchAllUsers: build.query({
			query: (limit = 15, friend = false) => ({
				url: '/users',
				params: {
					count: limit,
					friend,
				},
			}),
			providesTags: ['Subscription'],
		}),
		subscribeOnUser: build.mutation({
			query: (userId) => ({
				url: `/follow/${userId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Subscription'],
		}),
		unsubscribeFromUser: build.mutation({
			query: (userId) => ({
				url: `/follow/${userId}`,
				method: 'DELETE',
			}),
		}),
		invalidatesTags: ['Subscription'],
	}),
})
