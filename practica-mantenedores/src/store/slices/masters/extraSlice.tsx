import { createSlice } from "@reduxjs/toolkit";

export const extraSlice = createSlice({
  name: "extra",
  initialState: {
    extraList: [],
    extra: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getExtraList: (state, action) => {
      state.extraList = action.payload;
    },
    setExtra: (state, action) => {
      state.extra = action.payload;
    },
  },
});

export const { getExtraList, setExtra } = extraSlice.actions;

export default extraSlice.reducer;
