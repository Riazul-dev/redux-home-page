import { createSlice } from "@reduxjs/toolkit";

const initialState = [{

}];

const cartSlice = createSlice({
  name: "ProductCard",
  initialState,
  reducers: {
    addProduct: (state, action) => {},
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
});

export const {addProduct, updateProduct, deleteProduct,} = cartSlice.actions;
export default cartSlice.reducer;
