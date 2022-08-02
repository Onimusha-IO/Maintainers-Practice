import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  cream: {
    name: "",
    id: "",
  },
};

export const creamSlice = createSlice({
  name: "cream",
  initialState,
  reducers: {
    getCreamList: (state, action) => {
      state.list = action.payload;
    },
    setCream: (state, action) => {
      state.cream = action.payload;
    },
    resetCream: (state) => {
      state.cream = initialState.cream;
    },
  },
});

export const { getCreamList, setCream } = creamSlice.actions;

export default creamSlice.reducer;
