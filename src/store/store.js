import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import CategorySlice from './category/categorySlice';
import productSlice from './product/productSlice';
import userSlice from './user/userSlice';
import discountSlice  from './discount/discountSlice';
import orderSlice from './orders/ordersSlice';
import employeeSlice from './employee/employeeSlice';
import storeSlice from './store/storeSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    products: productSlice,
    Category: CategorySlice,
    stores: storeSlice,
    users: userSlice,
    auth: authReducer,
    discount:discountSlice,
    order:orderSlice,
    employees:employeeSlice
  },
});
