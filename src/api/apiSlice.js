import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Custom baseQuery with JWT token
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const api = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Recipe", "Category", "Cart"],
  endpoints: (builder) => ({
    // GET all recipes
    getRecipes: builder.query({
      query: () => "/shop",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Recipe", id })),
              { type: "Recipe", id: "LIST" },
            ]
          : [{ type: "Recipe", id: "LIST" }],
    }),
    // GET all recipes for a given category Id
    getRecipesWithGivenCategory: builder.query({
      query: (catId) => `/shop/recipe/${catId}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Recipe", id })),
              { type: "Recipe", id: "LIST" },
            ]
          : [{ type: "Recipe", id: "LIST" }],
    }),
    // GET all categories
    getCategories: builder.query({
      query: () => "/category",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Category", id })),
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }],
    }),
    //Get Cart
    getCart: builder.query({
      query: () => "/user/cart",
      providesTags: [{ type: "Cart", id: "LIST" }],
    }),
    // POST recipe to cart
    addToCart: builder.mutation({
      query: (recipeId) => ({
        url: "/user/cart",
        method: "POST",
        body: { recipeId },
      }),
      // Invalidate the recipes cache to trigger a refetch
      invalidatesTags: [{ type: "Cart", id: "LIST" }],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipesWithGivenCategoryQuery,
  useGetCategoriesQuery,
  useGetCartQuery,
  useAddToCartMutation,
} = api;

export default api;
