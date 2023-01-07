import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "laptop",
};

export const serchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { search } = serchSlice.actions;

export default serchSlice.reducer;
