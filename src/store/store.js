import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    theme: themeReducer,
  },
});