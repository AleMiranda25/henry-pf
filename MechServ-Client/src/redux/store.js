import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import servicesReducer from "./serviceSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    services: servicesReducer,
  },
});
