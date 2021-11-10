import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'

export const profileAPI = createApi({
    reducerPath: 'profileAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://social-network.samuraijs.com/api/1.0/profile',
        prepareHeaders:(headers) => {
            headers.set('API-KEY', '56da4b49-e130-401a-8eee-bc205b915589')
            return headers
        }
    }),
    endpoints: (build) => ({
        fetchStatus: build.query({
            query: (id) => ({
                url: `/status/${id}`,
            }),
        }),
        followOnUser: build.mutation({
            query: (user) => ({
                url: `/follow/${user.id}`,
                method: 'POST'
            })
        }),

    })
})