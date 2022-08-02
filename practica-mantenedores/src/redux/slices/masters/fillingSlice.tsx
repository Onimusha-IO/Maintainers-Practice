import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  filling: {
    name: "",
    id: "",
  },
};

export const fillingSlice = createSlice({
  name: "filling",
  initialState,
  reducers: {
    getFillingList: (state, action) => {
      state.filling = action.payload;
    },
    setFilling: (state, action) => {
      state.filling = action.payload;
    },
    resetFilling: (state) => {
      state.filling = initialState.filling;
    },
  },
});

export const { getFillingList, setFilling } = fillingSlice.actions;

export default fillingSlice.reducer;
