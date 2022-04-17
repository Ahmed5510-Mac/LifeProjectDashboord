import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "Category/getCategory",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:8080/Category");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getCategoryById = createAsyncThunk(
  "Category/getCategoryById",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:8080/Category/${_id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertCategory = createAsyncThunk(
  "Category/insertCategory",
  async (CategoryData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const config = { headers: { "content-type": "multipart/form-data" } };
    try {
      const res = await axios.post(
        "http://localhost:8080/Category",
        CategoryData,
        config
      );
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// get [];
// get /id {}
// delete
// put

export const editCategory = createAsyncThunk(
  "Category/editCategory",

  async (categoryData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res=await axios.put(`http://localhost:8080/Category/${categoryData.id}`,categoryData.formData);
     return res
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "Category/deleteCategory",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:8080/Category/${_id}`, {
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
  Category: [],
  isLoading: false,
  error: null,
  CategoryInfo: null,
};

export const CategorySlice = createSlice({
  name: "Category",
  initialState,
  extraReducers: {
    //get-Category
    [getCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Category = action.payload;
    },
    [getCategory.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //get Category By Id
    [getCategoryById.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategoryById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Category = action.payload;
    },
    [getCategoryById.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert Category
    [insertCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Category.push(action.payload);
    },
    [insertCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //edit Category
    [editCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [editCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action.payload);
    },
    [editCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete Category
    [deleteCategory.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Category = state.Category.filter((el) => el._id !== action.payload);
    },
    [deleteCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default CategorySlice.reducer;
