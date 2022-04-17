import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import  CategorySlice  from './category/categorySlice';
import productSlice from './product/productSlice';
import userSlice from "./user/userSlice"
export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), 
     reducer: {
    products: productSlice,
    Category:CategorySlice,
    users:userSlice
  },
});

