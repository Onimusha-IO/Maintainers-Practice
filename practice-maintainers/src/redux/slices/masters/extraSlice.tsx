import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

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

export const { getExtraList, setExtra, resetExtra } = extraSlice.actions;

export default extraSlice.reducer;

export const listExtra = async (dispatch: any) => {
  try {
    const res = await client.get("/api/extra/list", {
      headers: config.headers,
    });
    dispatch(getExtraList(res.data));
  } catch (error) {
    console.log("list Extra error: ", error);
  }
};

export const createExtra = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/extra/create", values, {
      headers: config.headers,
    });
    listExtra(dispatch);
    dispatch(setExtra(res.data));
  } catch (error) {
    console.log("create Extra error: ", error);
  }
};

export const updateExtra = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/extra/update", values, {
      headers: config.headers,
    });
    listExtra(dispatch);
    dispatch(setExtra(res.data));
  } catch (error) {
    console.log("update Extra error: ", error);
  }
};

export const deleteExtra = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/extra/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listExtra(dispatch);
    dispatch(resetExtra());
  } catch (error) {
    console.log("delete Extra error: ", error);
  }
};
