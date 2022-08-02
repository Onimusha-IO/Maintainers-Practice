import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  extra: {
    name: "",
    id: "",
  },
};

export const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    getExtraList: (state, action) => {
      state.list = action.payload;
    },
    setExtra: (state, action) => {
      state.extra = action.payload;
    },
    resetExtra: (state) => {
      state.extra = initialState.extra;
    },
  },
});

export const { getExtraList, setExtra } = extraSlice.actions;

export default extraSlice.reducer;
