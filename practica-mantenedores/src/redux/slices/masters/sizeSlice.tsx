import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  size: {
    name: "",
    id: "",
  },
};

export const sizeSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    getSizeList: (state, action) => {
      state.list = action.payload;
    },
    setsize: (state, action) => {
      state.size = action.payload;
    },
    resetSize: (state) => {
      state.size = initialState.size;
    },
  },
});

export const { getSizeList, setsize } = sizeSlice.actions;

export default sizeSlice.reducer;
