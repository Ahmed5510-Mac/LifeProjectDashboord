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
    // let formData = new FormData()
    // formData.append('customertData._id',customertData._id)
    // formData.append('customertData.fullName',customertData.fullName)
    // formData.append('customertData.customerPhone',customertData.customerPhone)
    // formData.append('customertData.customerEmail',customertData.customerEmail)
    // formData.append('customertData.image',file)
     try {
      const res = await fetch('http://localhost:8080/customer', {
        method: 'POST',
        body: JSON.stringify(customertData),
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
      const data = await res.json();
      console.log(data)
      return data;
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
         await fetch(`http://localhost:8080/customer/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json;charset=UTF-8',
        },
      });
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const selectCustomer = createAsyncThunk(
  'customer/selectCustomer',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/customer', {
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
  customers: null,
  isLoading: false,
  error: null,
  customerInfo: null,
  file:null
};

export const userSlice = createSlice({
  name: 'customer',
  initialState,
  reducers:{
    upadateFile:function(state,action)
          {
            console.log(action.payload)
          }
          },
  extraReducers: {
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
    },
    //select Customer
    [selectCustomer.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [selectCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerInfo = action.payload;
    },
    [selectCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {upadateFile} =  userSlice.actions;
export default userSlice.reducer;
