import { createSlice } from "@reduxjs/toolkit";

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    adultCount: 0,
    guestCount: 0,
  },
  reducers: {
    guestIncrement: (state) => {
      if (state.guestCount < 12) state.guestCount++;
    },
    guestDecrement: (state) => {
      state.guestCount <= 0 ? (state.guestCount = 0) : state.guestCount--;
    },
    adultIncrement: (state) => {
      if (state.adultCount < 13) state.adultCount++;
    },
    adultDecrement: (state) => {
      state.adultCount <= 0 ? (state.adultCount = 0) : state.adultCount--;
    },
  },
});

export const {
  guestIncrement,
  guestDecrement,
  adultIncrement,
  adultDecrement,
} = guestSlice.actions;
export default guestSlice.reducer;
