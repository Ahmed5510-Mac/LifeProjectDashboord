import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "auth/getUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:8080/customer");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Logout
export const logout = createAsyncThunk(
  "auth/logout",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      localStorage.removeItem("user");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Login
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("http://localhost:8080/login", userData, {
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      });
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//get user from local storage
let user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user :null,
  isError: null,
  isSuccess: false,
  isLoading: false,
  message: "",
  blackListUsers:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.user=null
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: {
 
    [logout.fulfilled]: (state, action) => {
      console.log(action);
      state.user = null;
      state.myfavourites = [];
    },
    //login
    [login.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.isError = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [getUsers.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.blackListUsers= action.payload.filter((customer)=>customer.blackList === true)
      state.user = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
