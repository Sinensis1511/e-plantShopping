import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
    updateQuantity: (state, action) => {},
    handleAddToCart:()=>()
  },
});

export const { addItem, removeItem, updateQuantity, handleAddToCart } =
  CartSlice.actions;

export default CartSlice.reducer;
