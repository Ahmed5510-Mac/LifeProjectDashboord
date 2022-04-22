import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmployees = createAsyncThunk(
  'employee/getEmployees',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/employee');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertEmployee = createAsyncThunk(
  'employee/insertEmployee',
  async (employeeData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post('http://localhost:8080/employee', employeeData);
      console.log(res);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  'employee/deleteEmployee',
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.delete(`http://localhost:8080/employee/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const selectEmployee = createAsyncThunk(
  'employee/selectEmployee',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get('http://localhost:8080/employee', {
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

export const editEmployee = createAsyncThunk(
  'employee/editEmployee',
  async (employeeData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      console.log(employeeData.id);
      const res = await axios.put(
        `http://localhost:8080/employee/${employeeData.id}`,
        employeeData.formData
      );
      console.log(res.data);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  employees: [],
  isLoading: false,
  error: null,
  employeeInfo: null,
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,

  reducers:{

  },
  extraReducers: {
    //get-employees
    [getEmployees.pending]: (state, action) => {
      console.log(action);
      state.isLoading = true;
      state.error = null;
    },
    [getEmployees.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.employees = action.payload;
    },
    [getEmployees.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    //insert employee
    [insertEmployee.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertEmployee.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.employees.push(action.payload);
    },
    [insertEmployee.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //delete employee
    [deleteEmployee.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteEmployee.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.employees = state.employees.filter((el) => el._id !== action.payload);
    },
    [deleteEmployee.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //select employee
    [selectEmployee.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [selectEmployee.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.employeeInfo = action.payload;
    },
    [selectEmployee.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Edit employee
    [editEmployee.pending]: (state, action) => {
      console.log(action.payload);
      state.isLoading = true;
      state.error = null;
    },
    [editEmployee.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
    [editEmployee.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default employeeSlice.reducer;
