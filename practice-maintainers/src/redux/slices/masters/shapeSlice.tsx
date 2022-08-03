import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

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

export const { getShapeList, setShape, resetShape } = shapeSlice.actions;

export default shapeSlice.reducer;

export const listShape = async (dispatch: any) => {
  try {
    const res = await client.get("/api/shape/list", {
      headers: config.headers,
    });
    dispatch(getShapeList(res.data));
  } catch (error) {
    console.log("list Shape error: ", error);
  }
};

export const createShape = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/shape/create", values, {
      headers: config.headers,
    });
    listShape(dispatch);
    dispatch(setShape(res.data));
  } catch (error) {
    console.log("create Shape error: ", error);
  }
};

export const updateShape = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/shape/update", values, {
      headers: config.headers,
    });
    listShape(dispatch);
    dispatch(setShape(res.data));
  } catch (error) {
    console.log("update Shape error: ", error);
  }
};

export const deleteShape = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/shape/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listShape(dispatch);
    dispatch(resetShape());
  } catch (error) {
    console.log("delete Shape error: ", error);
  }
};
