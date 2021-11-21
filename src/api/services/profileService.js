import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const profileService = createApi({
	reducerPath: 'profileService',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://social-network.samuraijs.com/api/1.0/profile',
		prepareHeaders: (headers) => {
			headers.set('API-KEY', '5f2d5af9-d6f0-4b7d-8e20-5a0ae84fdc07')
			return headers
		},
		credentials: 'include',
		mode: 'cors',
	}),
	tagTypes: ['Status'],
	endpoints: (build) => ({
		fetchProfile: build.query({
			query: (id) => ({
				url: `/${id}`,
			}),
		}),
		fetchStatus: build.query({
			query: (id) => ({
				url: `/status/${id}`,
			}),
			providesTags: (result) => ['Status'],
		}),
		updateStatus: build.mutation({
			query: (status) => {
				return {
					url: '/status',
					method: 'PUT',
					body: status,
				}
			},
			invalidatesTags: ['Status'],
		}),
		updateProfile: build.mutation({
			query: (profile) => {
				return {
					url: '/',
					method: 'PUT',
					body: profile,
				}
			},
		}),
	}),
})
