import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  dough: {
    name: "",
    id: "",
  },
};

export const doughSlice = createSlice({
  name: "dough",
  initialState,
  reducers: {
    getDoughList: (state, action) => {
      state.list = action.payload;
    },
    setDough: (state, action) => {
      state.dough = action.payload;
    },
    resetDough: (state) => {
      state.dough = initialState.dough;
    },
  },
});

export const { getDoughList, setDough } = doughSlice.actions;

export default doughSlice.reducer;
