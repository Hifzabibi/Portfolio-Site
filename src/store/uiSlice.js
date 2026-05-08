import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;