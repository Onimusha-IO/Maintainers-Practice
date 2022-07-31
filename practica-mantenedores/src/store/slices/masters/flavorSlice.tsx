import { createSlice } from "@reduxjs/toolkit";

export const flavorSlice = createSlice({
  name: "flavor",
  initialState: {
    flavorList: [],
    flavor: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getFlavorList: (state, action) => {
      state.flavorList = action.payload;
    },
    setFlavor: (state, action) => {
      state.flavor = action.payload;
    },
  },
});

export const { getFlavorList, setFlavor } = flavorSlice.actions;

export default flavorSlice.reducer;
