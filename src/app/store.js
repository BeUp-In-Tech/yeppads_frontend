import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import apiSlice from "../features/api/apiSlice";
import notMatchReducer from "../features/deal/dealSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        notMatch: notMatchReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(apiSlice.middleware),
});