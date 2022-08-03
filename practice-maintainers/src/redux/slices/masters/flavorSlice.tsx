import { createSlice } from "@reduxjs/toolkit";

import client from "../../../client/Client";
import { config } from "../../../utils/config";

const initialState = {
  list: [],
  flavor: {
    name: "",
    id: "",
  },
};

export const flavorSlice = createSlice({
  name: "flavor",
  initialState,
  reducers: {
    getFlavorList: (state, action) => {
      state.list = action.payload;
    },
    setFlavor: (state, action) => {
      state.flavor = action.payload;
    },
    resetFlavor: (state) => {
      state.flavor = initialState.flavor;
    },
  },
});

export const { getFlavorList, setFlavor, resetFlavor } = flavorSlice.actions;

export default flavorSlice.reducer;

export const listFlavor = async (dispatch: any) => {
  try {
    const res = await client.get("/api/flavor/list", {
      headers: config.headers,
    });
    dispatch(getFlavorList(res.data));
  } catch (error) {
    console.log("list Flavor error: ", error);
  }
};

export const createFlavor = async (dispatch: any, values: any) => {
  try {
    const res = await client.post("/api/flavor/create", values, {
      headers: config.headers,
    });
    listFlavor(dispatch);
    dispatch(setFlavor(res.data));
  } catch (error) {
    console.log("create Flavor error: ", error);
  }
};

export const updateFlavor = async (dispatch: any, values: any) => {
  try {
    const res = await client.put("/api/flavor/update", values, {
      headers: config.headers,
    });
    listFlavor(dispatch);
    dispatch(setFlavor(res.data));
  } catch (error) {
    console.log("update Flavor error: ", error);
  }
};

export const deleteFlavor = async (dispatch: any, values: any) => {
  try {
    const res = await client.delete("/api/flavor/delete", {
      data: values,
      headers: config.headers,
    });
    console.log(res.data);
    listFlavor(dispatch);
    dispatch(resetFlavor());
  } catch (error) {
    console.log("delete Flavor error: ", error);
  }
};
