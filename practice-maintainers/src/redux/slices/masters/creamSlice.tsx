import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  list: [],
  cream: {
    name: "",
    id: "",
  },
};

export const creamSlice = createSlice({
  name: "cream",
  initialState,
  reducers: {
    getCreamList: (state, action) => {
      state.list = action.payload;
    },
    setCream: (state, action) => {
      state.cream = action.payload;
    },
    resetCream: (state) => {
      state.cream = initialState.cream;
    },
  },
});

export const { getCreamList, setCream, resetCream } = creamSlice.actions;

export default creamSlice.reducer;

export const listCream = async (dispatch: any) => {
  try {
    const res = await client.get("/api/cream/list", {
      headers: config.headers,
    });
    dispatch(getCreamList(res.data));
  } catch (error) {
    console.log("list Cream error: ", error);
  }
};

export const createCream = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/cream/create", values, {
      headers: config.headers,
    });
    listCream(dispatch);
    dispatch(setCream(res.data));
  } catch (error) {
    console.log("create Cream error: ", error);
  }
};

export const updateCream = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/cream/update", values, {
      headers: config.headers,
    });
    listCream(dispatch);
    dispatch(setCream(res.data));
  } catch (error) {
    console.log("update Cream error: ", error);
  }
};

export const deleteCream = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/cream/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listCream(dispatch);
    dispatch(resetCream());
  } catch (error) {
    console.log("delete Cream error: ", error);
  }
};
