import { createSlice } from "@reduxjs/toolkit";
import { eventfilter } from "../../logic/logic";

export const staysSlice = createSlice({
  name: "stays",
  initialState: {
    data: [],
  },
  reducers: {
    addStays: (state, action) => {
      state.data = action.payload;
    },
    filterStays: (state, action) => {
      state.data = eventfilter(action.payload);
    },
  },
});

export const { addStays, filterStays } = staysSlice.actions;
export default staysSlice.reducer;
