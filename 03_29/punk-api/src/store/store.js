import { configureStore } from '@reduxjs/toolkit';
import beerReducer from './beerSlice';

export default configureStore({
    reducer: {
        beer: beerReducer
    }
})