import { createSlice } from "@reduxjs/toolkit";

export const shapeSlice = createSlice({
  name: "masters",
  initialState: {
    shapeList: [],
    shape: {
      name: "",
      id: "",
    },
  },
  reducers: {
    getShapeList: (state, action) => {
      state.shapeList = action.payload;
    },
    setShape: (state, action) => {
      state.shape = action.payload;
    },
  },
});

export const { getShapeList, setShape } = shapeSlice.actions;

export default shapeSlice.reducer;
