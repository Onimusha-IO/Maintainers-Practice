import { createSlice } from "@reduxjs/toolkit";

export const fillingSlice = createSlice({
  name: "filling",
  initialState: {
    fillingList: [],
    filling: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getFillingList: (state, action) => {
      state.fillingList = action.payload;
    },
    setFilling: (state, action) => {
      state.filling = action.payload;
    },
  },
});

export const { getFillingList, setFilling } = fillingSlice.actions;

export default fillingSlice.reducer;
