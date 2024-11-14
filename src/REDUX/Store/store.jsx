import { configureStore } from "@reduxjs/toolkit";
import cartRedu from "../Features/productCart/CartSlice";

const store = configureStore({
  reducer: {
    cartReducer: cartRedu,
  },
});

export default store;
