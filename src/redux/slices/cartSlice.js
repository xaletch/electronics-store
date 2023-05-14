import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        totalPrice: 0,
        count: 1,
        items: JSON.parse(localStorage.getItem('cart')) || [],
    },
    reducers: {
        addProductCart(state, action) {
            const addItem = state.items.find((item) => item.id === action.payload.id)
            
            if (addItem) {
                addItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
                state.totalPrice = state.items.reduce((sum, item) => item.price + sum, 0);
            }
        },
        deleteProduct(state, action) {
           state.items = state.items.filter((item) => item.id !== action.payload)
           state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
        },
        minusItem(state, action) {
            const addItem = state.items.find((item) => item.id === action.payload)
            state.items = state.items.filter((item) => item.count !== 0)

            if (addItem) {
                addItem.count--;
            }

            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
        },
        plusItem(state, action) {
            const addItem = state.items.find((item) => item.id === action.payload)
            state.items = state.items.filter((item) => item.count >= 1)

            if (addItem) {
                addItem.count++;
            }

            state.totalPrice = state.items.reduce((sum, item) => item.price * item.count + sum, 0);
        },
    }
})

export const { minusItem, plusItem, addProductCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;