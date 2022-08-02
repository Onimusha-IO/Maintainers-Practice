import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  flavor: {
    name: "",
    id: "",
  },
};

export const flavorSlice = createSlice({
  name: "flavor",
  initialState,
  reducers: {
    getFlavorList: (state, action) => {
      state.list = action.payload;
    },
    setFlavor: (state, action) => {
      state.flavor = action.payload;
    },
    resetFlavor: (state) => {
      state.flavor = initialState.flavor;
    },
  },
});

export const { getFlavorList, setFlavor } = flavorSlice.actions;

export default flavorSlice.reducer;
