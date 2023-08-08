import { IStudent } from './../components/store-tk/student/student.interface';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { IProduct } from "../interface/product";


const productAPI = createApi({
  reducerPath: "product",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8088/api",
  }),
  endpoints: (builder) => ({    
    getProducts: builder.query<IStudent, void>({
      query: () => `/products/products`,
      providesTags: ["Product"],
    }),
    getProductsById: builder.query<IStudent, number | string>({
      query: (_id: string) => `products/products/${_id}`,
      providesTags: ["Product"],
    }),
    addProducts: builder.mutation({
      query: (product: IStudent) => ({
        url: `/products/products`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProducts: builder.mutation<IStudent, IStudent>({
      query: (product: IStudent) => ({
        url: `/products/products/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProducts: builder.mutation<void, number>({
      query: (id) => ({
        url: `/products/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    // uploadimg: builder.mutation<any,any>({
    //   query: (data:any)=>({
    //     url: `/upload/cloudinary-upload`,
    //     method:"POST",
    //     body: data
    // }),
    // invalidatesTags: ['Product']
    // })
  }),
});
export const {
  useGetProductsQuery,
  useGetProductsByIdQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
  // useUploadimgMutation
} = productAPI;
export const productReducer = productAPI.reducer;
export default productAPI;