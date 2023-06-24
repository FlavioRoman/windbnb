import { createSlice } from "@reduxjs/toolkit";

export const EditSearchSlice = createSlice({
  name: "editSearch",
  initialState: {
    city: "",
    country: "",
    showGuestOption: false,
    showLocationOption: false,
    location: "Helsinki, Finland",
    show: false,
  },
  reducers: {
    show: (state) => {
      state.show = true;
    },
    hide: (state) => {
      state.show = false;
    },
    city: (state, action) => {
      state.city = action.payload;
    },
    country: (state, action) => {
      state.country = action.payload;
    },
    location: (state, action) => {
      state.location = action.payload;
    },
    showLocationOption: (state) => {
      state.showLocationOption = true;
    },
    showGuestOption: (state) => {
      state.showGuestOption = true;
    },
    hideLocationOption: (state) => {
      state.showLocationOption = false;
    },
    hideGuestOption: (state) => {
      state.showGuestOption = false;
    },
  },
});

export const {
  show,
  hide,
  city,
  country,
  location,
  showGuestOption,
  hideGuestOption,
  showLocationOption,
  hideLocationOption,
} = EditSearchSlice.actions;
export default EditSearchSlice.reducer;
