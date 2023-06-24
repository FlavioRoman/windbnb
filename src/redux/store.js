import { configureStore } from "@reduxjs/toolkit";
import staysSlice from "./slice/staysSlice";
import editSearchSlice from "./slice/editSearchSlice";
import guestSlice from "./slice/guestSlice";

export const store = configureStore({
  reducer: {
    stays: staysSlice,
    guest: guestSlice,
    editSearch: editSearchSlice,
  },
});
