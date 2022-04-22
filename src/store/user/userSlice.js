import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useParams } from 'react-router-dom';
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
  async (customerData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // const config = {headers:{'content-type':'multipart/form-data'}}
    // axios.post('http://localhost:8080/customer',customertData,config);
     try {
      const res = await fetch('http://localhost:8080/customer',{
        method:'POST',
        body:customerData,
            }) 
      console.log(res)
      return res.data.data;
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
export const editCustomer = createAsyncThunk(
  'customer/editCustomer',
  async (customerData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(customerData.id)
      const res = await axios.put(`http://localhost:8080/customer/${customerData.id}`, 
      customerData.formData
      );
      console.log(res.data)
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState = {
  customers: [],
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
      console.log(action.payload)
      console.log(state.customers)
      state.isLoading = false;
      state.customers=action.payload;
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
   //Edit customer
[editCustomer.pending]: (state, action) => {
  console.log(action.payload);

state.isLoading = true;
state.error = null;
},
[editCustomer.fulfilled]: (state, action) => {
state.isLoading = false;
console.log(action.payload);
},
[editCustomer.rejected]: (state, action) => {
  console.log(action);
state.isLoading = false;
state.error = action.payload;
},
  },
});

export default userSlice.reducer;
