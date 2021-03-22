import { configureStore } from '@reduxjs/toolkit';
import showReducer from './showSlice';

export default configureStore({
    reducer: {
        show: showReducer
    }
})