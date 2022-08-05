import { configureStore } from "@reduxjs/toolkit";
import doughSlice from "../slices/masters/doughSlice";
import creamSlice from "../slices/masters/creamSlice";
import extraSlice from "../slices/masters/extraSlice";
import fillingSlice from "../slices/masters/fillingSlice";
import flavorSlice from "../slices/masters/flavorSlice";
import shapeSlice from "../slices/masters/shapeSlice";
import sizeSlice from "../slices/masters/sizeSlice";
import cakeSlice from "../slices/masters/cakeSlice";
import setSlice from "../slices/masters/setSlice";

export const store = configureStore({
  reducer: {
    doughSlice,
    creamSlice,
    extraSlice,
    fillingSlice,
    flavorSlice,
    shapeSlice,
    sizeSlice,
    cakeSlice,
    setSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
