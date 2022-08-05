import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  list: [],
  set: [],
  // TODO: combination set
};

export const setSlice = createSlice({
  name: "set",
  initialState,
  reducers: {
    getSetList: (state, action) => {
      state.list = action.payload;
    },
    setSet: (state, action) => {
      state.set = action.payload;
    },
    resetSet: (state) => {
      state.set = initialState.set;
    },
  },
});

export const { getSetList, setSet, resetSet } = setSlice.actions;

export default setSlice.reducer;

export const listOptionSet = async (dispatch: any) => {
  try {
    const res = await client.get("/api/set/list", {
      headers: config.headers,
    });
    dispatch(getSetList(res.data));
  } catch (error) {
    console.log("list Set error: ", error);
  }
};
