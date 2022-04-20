import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getDiscounts = createAsyncThunk(
    'discount/getDiscounts',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.get('http://localhost:8080/discounts');
            console.log("from get ", res.data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const insertDiscount = createAsyncThunk(
    'discount/insertDiscount',
    async (discounttData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.post('http://localhost:8080/discounts', discounttData);
            console.log("from insert ", res.data.data);
            return res.data.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteDiscount = createAsyncThunk(
    'discount/deleteDiscount',
    async (_id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.delete(`http://localhost:8080/discounts/${_id}`);
            return _id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const editDiscount = createAsyncThunk(
    'discount/editDiscount',
    async (discounttData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await axios.put(
                `http://localhost:8080/discounts/${discounttData.id}`,
                discounttData.formData
            );
            console.log(res.data);
            return res;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    discounts: null,
    isLoading: false,
    error: null,
    discountInfo: null,
};

export const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {

    },
    extraReducers: {
        //get Discounts
        [getDiscounts.pending]: (state, action) => {
            console.log(action);
            state.isLoading = true;
            state.error = null;
        },
        [getDiscounts.fulfilled]: (state, action) => {
            console.log("from get fulfield", action.payload);
            state.isLoading = false;
            state.discounts = action.payload;
        },
        [getDiscounts.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;
        },
        //insert Discounts
        [insertDiscount.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertDiscount.fulfilled]: (state, action) => {
            console.log("from insert fulfield", action.payload);
            state.isLoading = false;
            state.error = null;
            state.discounts = action.payload;
        },
        [insertDiscount.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //delete product
        [deleteDiscount.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [deleteDiscount.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.discounts = state.discounts.filter((el) => el._id !== action.payload);
        },
        [deleteDiscount.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        //Edit product
        [editDiscount.pending]: (state, action) => {
            console.log(action.payload);
            state.isLoading = true;
            state.error = null;
        },
        [editDiscount.fulfilled]: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
        },
        [editDiscount.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default discountSlice.reducer;
