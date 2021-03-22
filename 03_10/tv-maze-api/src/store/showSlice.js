import { createSlice } from '@reduxjs/toolkit';

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

export const showSlice = createSlice({
    name: "show",
    initialState: {
        searchResults: [],
        favourites: loadFromLocalStorage()
    },
    reducers: {
        setSearchResults: (state, action) => {
            return {
                ...state,
                searchResults: action.payload
            }
        },

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
    }
});

export const { setSearchResults, addFavourite, deleteFavourite } = showSlice.actions;

export const selectSearchResults = (state) => state.show.searchResults;
export const selectFavourites = (state) => state.show.favourites;

export default showSlice.reducer;