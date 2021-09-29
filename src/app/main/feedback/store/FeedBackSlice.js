import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';


export const addFeedBack = createAsyncThunk('feedBackApp/addFeedBack',async feedback =>{
        const response = await axios.post('/FeedBack' , feedback);
        const data =await response.data;
        return data;
})

const feedBackSlice = createSlice({
    name: 'feedBackApp/addFeedBack',
    initialState: null,
    reducers: {},
    extraReducers: {
        [addFeedBack.fulfilled]: (state, action) => action.payload
    }
})

export default feedBackSlice.reducer;