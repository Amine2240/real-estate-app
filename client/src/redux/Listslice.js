import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    additem: (state, action) => {
      state.value.push(action.payload);
    },
    removeitem: (state, action) => {
      state.value = state.value.filter((item) => {
        if (item.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
    },
    setmylist: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { additem, removeitem, setmylist } = ListSlice.actions;

export default ListSlice.reducer;
