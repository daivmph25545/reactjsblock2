// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IStudent } from './student.interface'

// Define a service using a base URL and expected endpoints
export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8088/api/products/products' }),
  tagTypes: ['Student'],
  endpoints: (builder) => ({
    getStudentList: builder.query({
      query: () => ``,
      providesTags: ['Student']
    }),
    addStudent : builder.mutation<IStudent[],IStudent>({
      query: (student) => ({
        url: '',
        method: 'POST',
        body: student
      }),
      invalidatesTags: ['Student']
    }),
    editStudent : builder.mutation<IStudent[],IStudent>({
      query: ({id,...student}) => ({
        url: `/${id}`,
        method: 'PUT',
        body: student
      }),
      invalidatesTags: ['Student']
    }),
    deleteStudent : builder.mutation<IStudent[],IStudent>({
      query: ({id}) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Student']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStudentListQuery,useAddStudentMutation, useEditStudentMutation,useDeleteStudentMutation } = studentApi