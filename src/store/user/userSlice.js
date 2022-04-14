import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCustomers = createAsyncThunk(
  'customer/getCustomer',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/customer');
      console.log(res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertCustomer = createAsyncThunk(
  'customers/insertCustomers',
  async (customertData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const config = {headers: { 'content-type': 'multipart/form-data' }}
     try {
      const res = await axios.post('http://localhost:8080/customer',customertData,config);
      console.log(res)
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  'customer/deleteCustomer',
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(`http://localhost:8080/customer/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
  customers: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'customer',
  initialState,
  reducers:{},
  extraReducers:{
     //getCustomers
    [getCustomers.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getCustomers.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.customers = action.payload;
    },
    [getCustomers.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert Customer
    [insertCustomer.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customers.push(action.payload);
    },
    [insertCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete Customer
    [deleteCustomer.pending]: (state, action) => {
        console.log(action);

      state.isLoading = true;
      state.error = null;
    },
    [deleteCustomer.fulfilled]: (state, action) => {
        console.log(action);

      state.isLoading = false;
      state.customers = state.customers.filter((customer) => customer._id !== action.payload);
    },
    [deleteCustomer.rejected]: (state, action) => {
        console.log(action);

      state.isLoading = false;
      state.error = action.payload;
    }
  },
});

export default userSlice.reducer;
