import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => {
    return {
      getComments: builder.query({
        query: () => `comments?limit=341`,
      }),

      addComment: builder.mutation({
        query: (newComment) => ({
          url: `comments/add`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: newComment,
        }),
      }),
    };
  },
});

export const { useAddCommentMutation, useGetCommentsQuery } = commentApi;
