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
      state.quantity += 1;
      state.total += action.payload.price;

      let product = state.products.find(
        (p) => p._id === action.payload.product._id
      );
      const productIndex = state.products.findIndex(
        (p) => p._id === action.payload.product._id
      );
      if (product) {
        product.quantity += 1;
        state.products.splice(productIndex, 1);
        state.products.splice(productIndex, 0, product);
      } else {
        const initial_quantity = { quantity: 1 };
        product = { ...action.payload.product, initial_quantity };
        state.products.push(product);
      }
    },
  },
});

export const { addProduct } = basketSlice.actions;

export default basketSlice.reducer;
