import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        itemsFavorites: JSON.parse(localStorage.getItem('favorites')) || [],
    },
    reducers: {
        addFavorites(state, action) {
            const addFavoritesItem = state.itemsFavorites.find((item) => item.id === action.payload.id)
            
            if (addFavoritesItem) {
                addFavoritesItem.exists = 'in favorites';
            } else {
                state.itemsFavorites.push( { ...action.payload, exists: 'in favorites' } );
            };
        },
        deleteFavorites(state, action) {
           state.itemsFavorites = state.itemsFavorites.filter((item) => item.id !== action.payload)
        },
    }
})

export const { addFavorites, deleteFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;