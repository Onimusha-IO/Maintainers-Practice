import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  optionList: [],
  setList: [],
  set: [],
  path: [],
};

export const setSlice = createSlice({
  name: "set",
  initialState,
  reducers: {
    getOptionList: (state, action) => {
      state.optionList = action.payload;
    },
    getSetList: (state, action) => {
      state.setList = action.payload;
    },
    setSet: (state, action) => {
      state.set = action.payload;
    },
    setPath: (state, action) => {
      state.path = action.payload;
    },
    resetSet: (state) => {
      state.set = initialState.set;
    },
    resetPath: (state) => {
      state.path = initialState.path;
    },
  },
});

export const { getOptionList, getSetList, setSet, resetSet, setPath } = setSlice.actions;

export default setSlice.reducer;

export const listOptionSet = async (dispatch: any) => {
  try {
    const res = await client.get("/api/set/optionList", {
      headers: config.headers,
    });
    dispatch(getOptionList(res.data));
  } catch (error) {
    console.log("optionList Set error: ", error);
  }
};

export const listSet = async (dispath: any) => {
  try {
    const res = await client.get("/api/set/list", {
      headers: config.headers,
    });
    dispath(getSetList(res.data));
  } catch (error) {
    console.log("optionList Path error: ", error);
  }
};

export const createSet = async (dispatch: any, values: any) => {
  console.log("set values: ", values)
  try {
    const res = await client.post("/api/set/create", values, {
      headers: config.headers,
    });
    listSet(dispatch);
    dispatch(setSet(res.data)); // revisar retorno de todas los end points de la api
  } catch (error) {
    console.log("create Cream error: ", error);
  }
};
