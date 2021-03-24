import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    const data = localStorage.getItem("favourites")
    if(data === null || data.length === 0){
        return [];
    } else {
        return JSON.parse(data);
    }
}

const saveToLocalStorage = (data) => {
    localStorage.setItem("favourites", JSON.stringify(data));
}

export const fetchSearchResults = createAsyncThunk(
    "show/search",
    async (query) => {
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
        const data = await response.json();
        return data;
    }
);

export const showSlice = createSlice({
    name: "show",
    initialState: {
        searchResults: [],
        favourites: loadFromLocalStorage()
    },
    reducers: {
        

        addFavourite: (state, action) => {
            const newState = {
                ...state,
                favourites: [...state.favourites, action.payload]
            }

            saveToLocalStorage(newState.favourites);

            return newState;
        },

        deleteFavourite: (state, action) => {
            const newState = {
                ...state,
                favourites: state.favourites.filter((fav) => {
                    if(fav.show.id != action.payload){
                        return fav;
                    }
                })
            }

            saveToLocalStorage(newState.favourites);

            return newState;
        }
    },
    extraReducers: {
        [fetchSearchResults.fulfilled]: (state, action) => {
            state.searchResults = action.payload;
        }
    }
});

export const { addFavourite, deleteFavourite } = showSlice.actions;

export const selectSearchResults = (state) => state.show.searchResults;
export const selectFavourites = (state) => state.show.favourites;

export default showSlice.reducer;