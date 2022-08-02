import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  shape: {
    name: "",
    id: "",
  },
};

export const shapeSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    getShapeList: (state, action) => {
      state.list = action.payload;
    },
    setShape: (state, action) => {
      state.shape = action.payload;
    },
    resetShape: (state) => {
      state.shape = initialState.shape;
    },
  },
});

export const { getShapeList, setShape } = shapeSlice.actions;

export default shapeSlice.reducer;
