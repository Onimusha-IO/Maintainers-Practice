import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  list: [],
  cake: [],
};

export const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    getOptionList: (state, action) => {
      state.list = action.payload;
    },
    setCake: (state, action) => {
      state.cake = action.payload;
    },
    resetCake: (state) => {
      state.cake = initialState.cake;
    },
  },
});

export const { getOptionList, setCake, resetCake } = cakeSlice.actions;

export default cakeSlice.reducer;

export const listOption = async (dispatch: any) => {
  try {
    const res = await client.get("/api/option/list", {
      headers: config.headers,
    });
    dispatch(getOptionList(res.data));
  } catch (error) {
    console.log("list Cake error: ", error);
  }
};