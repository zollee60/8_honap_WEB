import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: "book",
    initialState: [],
    reducers: {
        initBooks: (state,action) => {
            return action.payload
        },

        addBook: (state, action) => {
            return [...state, action.payload];
        },

        deleteBook: (state, action) => {
            return state.filter((book) => {
                if (book.id != action.payload) {
                    return book;
                }
            })
        },
        updateF: (state, action) => {
            state.forEach((book) => {
                if (book.id == action.payload.id) book.finished = action.payload.finished;
                return book;
            });
        }
    }
});

export const { addBook, deleteBook, updateF, initBooks } = bookSlice.actions;

export const selectBooks = (state) => state.book;

export default bookSlice.reducer;