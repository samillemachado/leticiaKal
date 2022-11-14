import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const gridIdSlice = createSlice({
  name: "gridId",
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = gridIdSlice.actions;
export default gridIdSlice.reducer;
