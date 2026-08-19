import apiSlice from "../api/apiSlice";

export const categoriesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createNewCategory: builder.mutation({
            query: (data) => ({
                url: "/category",
                headers: {
                    "Content-Type": "application/formdata"
                },
                method: "POST",
                body: data,
                credentials: "include",
            }),
            invalidatesTags: ["Categories"],
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: "/category",
                method: "GET",
                credentials: "include",
            }),
            providesTags: ["Categories"],
        }),
        getCategoryDetails: builder.query({
            query: ({ id, longitude, latitude, page = 1, limit = 1000, nationwide, locationMode, country, city, state, zip_code }) => {
                let queryString = `?page=${page}&limit=${limit}&sort=distance`;

                if (nationwide) {
                    queryString += `&nationwide=true`;
                } else {
                    if (locationMode === 'SELECTED_LOCATION') {
                        queryString += `&locationMode=${locationMode}`;
                        if (country) queryString += `&country=${country}`;
                        if (city) queryString += `&city=${city}`;
                        if (state) queryString += `&state=${state}`;
                        if (zip_code) queryString += `&zip_code=${zip_code}`;
                    } else if (locationMode === 'CURRENT_LOCATION') {
                        queryString += `&locationMode=${locationMode}`;
                        if (latitude) queryString += `&lat=${latitude}`;
                        if (longitude) queryString += `&lng=${longitude}`;
                    }
                }

                return {
                    url: `/service/c/${id}${queryString}`,
                    method: "GET",
                    credentials: "include",
                };
            },
            providesTags: (_result, _error, arg) => [
                { type: "Category", id: arg.id },
            ],
        }),
        editCategories: builder.mutation({
            query: ({ id, data }) => ({
                url: `/category/${id}`,
                headers: {
                    "Content-Type": "application/formdata"
                },
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (_result, _error, arg) => [
                "Categories",
                { type: "Category", id: arg.id }
            ]
        }),
        handleCategoriesDelete: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',
                credentials: "include",
            }),
            invalidatesTags: ["Categories"],
        }),
    }),
});

export const {
    useGetAllCategoriesQuery,
    useGetCategoryDetailsQuery,
    useLazyGetCategoryDetailsQuery,
    useCreateNewCategoryMutation,
    useHandleCategoriesDeleteMutation,
    useEditCategoriesMutation,
} = categoriesApi;




