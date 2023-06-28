import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
