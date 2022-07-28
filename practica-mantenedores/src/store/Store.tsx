import { configureStore } from "@reduxjs/toolkit";
import mastersReducer from "./slices/MastersSlice";

export const store = configureStore({
  reducer: {
    mastersReducer,
  },
});
