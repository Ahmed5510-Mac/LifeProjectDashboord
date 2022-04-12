import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/products');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertProduct = createAsyncThunk(
  'product/insertProduct',
  async (productData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:8080/products', {
        method: 'POST',
        body: JSON.stringify(productData),
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8080/products/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
      // const data = await res.json;
      // return data;
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const selectProduct = createAsyncThunk(
  'product/selectProduct',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/products', {
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: null,
  isLoading: false,
  error: null,
  productInfo: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: {
    //get-products
    [getProducts.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert product
    [insertProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
    },
    [insertProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete product
    [deleteProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter((el) => el._id !== action.payload);
    },
    [deleteProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //select product
    [selectProduct.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [selectProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productInfo = action.payload;
    },
    [selectProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
