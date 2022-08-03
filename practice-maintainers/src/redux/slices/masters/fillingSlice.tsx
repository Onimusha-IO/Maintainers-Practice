import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

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
      state.list = action.payload;
    },
    setFilling: (state, action) => {
      state.filling = action.payload;
    },
    resetFilling: (state) => {
      state.filling = initialState.filling;
    },
  },
});

export const { getFillingList, setFilling, resetFilling } = fillingSlice.actions;

export default fillingSlice.reducer;

export const listFilling = async (dispatch: any) => {
  try {
    const res = await client.get("/api/filling/list", {
      headers: config.headers,
    });
    dispatch(getFillingList(res.data));
  } catch (error) {
    console.log("list Filling error: ", error);
  }
};

export const createFilling = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/filling/create", values, {
      headers: config.headers,
    });
    listFilling(dispatch);
    dispatch(setFilling(res.data));
  } catch (error) {
    console.log("create Filling error: ", error);
  }
};

export const updateFilling = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/filling/update", values, {
      headers: config.headers,
    });
    listFilling(dispatch);
    dispatch(setFilling(res.data));
  } catch (error) {
    console.log("update Filling error: ", error);
  }
};

export const deleteFilling = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/filling/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listFilling(dispatch);
    dispatch(resetFilling());
  } catch (error) {
    console.log("delete Filling error: ", error);
  }
};
