import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import favorites from './slices/favoritesSlice'

export const store = configureStore({
    reducer: {
        cart,
        favorites,
    }
})