import {configureStore} from "@reduxjs/toolkit";
import {api} from "@/store/api";
import authReducer from "@/store/authSlice";
import modalReducer from './modalSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        modal: modalReducer,
        cart: cartReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})