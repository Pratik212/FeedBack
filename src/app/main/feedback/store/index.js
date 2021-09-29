import { combineReducers } from '@reduxjs/toolkit';
import addFeedBack from './FeedBackSlice';

const authReducers = combineReducers({
    addFeedBack
});

export default authReducers;
