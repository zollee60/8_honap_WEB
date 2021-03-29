import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBeers = createAsyncThunk(
    "beer/search",
    async (query) => {
        const response = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`);
        const data = await response.json();
        return data;
    }
)

export const beerSlice = createSlice({
    name: "beer",
    initialState: {
        searchResults: [],
        wishList: []
    },
    reducers: {

        addToWishList: (state, action) => {
            return {
                ...state,
                wishList: [...state.wishList, action.payload]
            }
        },

        removeFromWishList: (state, action) => {
            return {
                ...state,
                wishList: state.wishList.filter((beer) => {
                    if(beer.id != action.payload){
                        return beer;
                    }
                })
            }
        }
    },

    extraReducers: {
        [fetchBeers.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
        }
    }
});

export const { addToWishList, removeFromWishList } = beerSlice.actions;

export const selectSearchResults = (state) => state.beer.searchResults;
export const selectWishList = (state) => state.beer.wishList;

export default beerSlice.reducer;