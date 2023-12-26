import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['menu'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/v1/'
    }),
    endpoints: build => ({
        // getMenu: build.query({
        //     query: () => 'menu',
        //     providesTags: result =>
        //         result ? [
        //                 ...result.map(({ id }) => ({ type: 'menu', id })),
        //                 { type: 'menu', id: 'LIST' }
        //             ]
        //             : [{ type: 'menu', id: 'LIST' }]
        // }),
        getMenu: build.query({
            query: () => 'menu',
        }),
        getDishes: build.query({
           query: () => 'dish'
        }),
        authenticate: build.mutation({
            query: (body) => ({
                url: 'auth/authenticate',
                method: 'POST',
                body: body,
                // headers: {
                //     Authorization: `Bearer ${localStorage.getItem('token')}`,
                // },
            }),
        }),
        register: build.mutation({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body: body,
            }),
        }),
        getOrders: build.query({
            query: () => ({
                url: 'order',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
        }),
        addOrder: build.mutation({
            query: (body) => ({
                url: 'order',
                method: 'POST',
                body: body,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
        })
    })
})

export const {
    useGetMenuQuery,
    useGetDishesQuery,
    useAuthenticateMutation,
    useRegisterMutation,
    useGetOrdersQuery,
    useAddOrderMutation
} = api