import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const ItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    getitem: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getitem } = ItemSlice.actions;

export default ItemSlice.reducer;
