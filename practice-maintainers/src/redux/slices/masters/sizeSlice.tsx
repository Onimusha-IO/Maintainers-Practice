import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  list: [],
  size: {
    name: "",
    id: "",
  },
};

export const sizeSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {
    getSizeList: (state, action) => {
      state.list = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    resetSize: (state) => {
      state.size = initialState.size;
    },
  },
});

export const { getSizeList, setSize, resetSize } = sizeSlice.actions;

export default sizeSlice.reducer;

export const listSize = async (dispatch: any) => {
  try {
    const res = await client.get("/api/size/list", {
      headers: config.headers,
    });
    dispatch(getSizeList(res.data));
  } catch (error) {
    console.log("list Size error: ", error);
  }
};

export const createSize = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/size/create", values, {
      headers: config.headers,
    });
    listSize(dispatch);
    dispatch(setSize(res.data));
  } catch (error) {
    console.log("create Size error: ", error);
  }
};

export const updateSize = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/size/update", values, {
      headers: config.headers,
    });
    listSize(dispatch);
    dispatch(setSize(res.data));
  } catch (error) {
    console.log("update Size error: ", error);
  }
};

export const deleteSize = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/size/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listSize(dispatch);
    dispatch(resetSize());
  } catch (error) {
    console.log("delete Size error: ", error);
  }
};
