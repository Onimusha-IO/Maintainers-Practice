import { createSlice } from "@reduxjs/toolkit";

export const mastersSlice = createSlice({
  name: "masters",
  initialState: {
    list: [],
  },
  reducers: {
    getDoughList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { getDoughList } = mastersSlice.actions;

export default mastersSlice.reducer;
