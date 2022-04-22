import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getstores = createAsyncThunk(
  "stores/getstores",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:8080/stores");
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getstoresById = createAsyncThunk(
  "stores/getstoresById",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:8080/stores/${_id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertstores = createAsyncThunk(
  "stores/insertstores",
  async (storeData, thunkAPI) => {
    console.log(storeData);
    const { rejectWithValue } = thunkAPI;
    const config = { "content-type": "multipart/form-data" }
    try {
      const res = await axios.post(
        "http://localhost:8080/stores",
        storeData,
        config
      );
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editstores = createAsyncThunk(
  "stores/editstores",

  async (storeData, thunkAPI) => {
    console.log(storeData)
    const { rejectWithValue } = thunkAPI;
    try {
      const res=await axios.put(`http://localhost:8080/stores/${storeData.id}`,storeData.Data);
      console.log(res);
     return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deletestores= createAsyncThunk(
  "stores/deletestores",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8080/stores/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
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

const initialState = {
  stores: [],
  isLoading: false,
  error: null,
  storesInfo: null,
};

export const storeSlice = createSlice({
  name: "stores",
  initialState,
  extraReducers: {
    //get-store
    [getstores.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getstores.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stores= action.payload;
    },
    [getstores.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //get store By Id
    [getstoresById.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getstoresById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stores = action.payload;
    },
    [getstoresById.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert store
    [insertstores.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertstores.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      state.stores.push(action.payload);
    },
    [insertstores.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //edit store
    [editstores.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [editstores.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload);
    },
    [editstores.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete store
    [deletestores.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deletestores.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stores = state.stores.filter((el) => el._id !== action.payload);
    },
    [deletestores.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default storeSlice.reducer;
