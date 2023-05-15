import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { addToCart } = storeSlice.actions;

export default storeSlice.reducer;
