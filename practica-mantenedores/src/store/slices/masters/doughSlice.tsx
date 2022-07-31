import { createSlice } from "@reduxjs/toolkit";

export const doughSlice = createSlice({
  name: "dough",
  initialState: {
    doughList: [],
    dough: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getDoughList: (state, action) => {
      state.doughList = action.payload;
    },
    setDough: (state, action) => {
      state.dough = action.payload;
    },
  },
});

export const { getDoughList, setDough } = doughSlice.actions;

export default doughSlice.reducer;
