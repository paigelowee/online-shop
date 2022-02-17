import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      console.log(action.payload);

      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
