import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

export default configureStore({
  reducer: { basket: basketSlice },
});
