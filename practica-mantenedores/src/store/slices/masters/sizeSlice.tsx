import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: "masters",
  initialState: {
    sizeList: [],
    size: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getSizeList: (state, action) => {
      state.sizeList = action.payload;
    },
    setsize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { getSizeList, setsize } = sizeSlice.actions;

export default sizeSlice.reducer;
