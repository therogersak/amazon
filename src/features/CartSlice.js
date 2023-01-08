import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeCart: (state, action) => {
      state.cart.filter(({ id }) => {
        return id === action.payload;
      });
    },

    deleteCart: (state) => {
      state.cart = null;
    },
  },
});

export const { addCart, removeCart, deleteCart } = cartSlice.actions;

export default cartSlice.reducer;
