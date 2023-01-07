import { QuickreplySharp } from "@mui/icons-material";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products?limit=100`,
    }),

    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    getReviews: builder.query({
      query: () => `/comments`,
    }),

    getProductBySearch: builder.query({
      query: (query) => `/products/search?q=${query}`,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetReviewsQuery,
  useGetProductBySearchQuery,
} = productApi;
