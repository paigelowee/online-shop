import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    quantity: 0,
    price: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
