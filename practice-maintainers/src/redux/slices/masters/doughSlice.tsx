import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

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

export const { getDoughList, setDough, resetDough } = doughSlice.actions;

export default doughSlice.reducer;

export const listDough = async (dispatch: any) => {
  try {
    const res = await client.get("/api/dough/list", {
      headers: config.headers,
    });
    dispatch(getDoughList(res.data));
  } catch (error) {
    console.log("list Dough error: ", error);
  }
};

export const createDough = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/dough/create", values, {
      headers: config.headers,
    });
    listDough(dispatch);
    dispatch(setDough(res.data));
  } catch (error) {
    console.log("create Dough error: ", error);
  }
};

export const updateDough = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/dough/update", values, {
      headers: config.headers,
    });
    listDough(dispatch);
    dispatch(setDough(res.data));
  } catch (error) {
    console.log("update Dough error: ", error);
  }
};

export const deleteDough = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/dough/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listDough(dispatch);
    dispatch(resetDough());
  } catch (error) {
    console.log("delete Dough error: ", error);
  }
};
