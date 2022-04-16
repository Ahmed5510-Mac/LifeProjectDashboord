import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import productSlice from './product/productSlice';
import userSlice from "./user/userSlice"
export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
     reducer: {
    products: productSlice,
    users:userSlice
  },
});

