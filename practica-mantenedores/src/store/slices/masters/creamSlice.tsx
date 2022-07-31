import { createSlice } from "@reduxjs/toolkit";

export const creamSlice = createSlice({
  name: "cream",
  initialState: {
    creamList: [],
    cream: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getCreamList: (state, action) => {
      state.creamList = action.payload;
    },
    setCream: (state, action) => {
      state.cream = action.payload;
    },
  },
});

export const { getCreamList, setCream } = creamSlice.actions;

export default creamSlice.reducer;
