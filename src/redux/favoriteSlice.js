import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorites: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(movie => movie.title !== action.payload.title)
        }
    },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavorite = state => state.favorites.favorites;

export default favoriteSlice.reducer;