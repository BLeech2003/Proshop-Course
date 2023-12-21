import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL , PRODUCTS_URL} from "../constants";

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes:["Product", "Order", "User"],
    endpoints: (builder) =>({
        getProducts: builder.query({
            query: ()=> ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
        }),
        getProductDetails: builder.query({
            query: (productId)=> ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 5,
        }),
    }),
});

export const {useGetProductsQuery, useGetProductDetailsQuery} = apiSlice;
