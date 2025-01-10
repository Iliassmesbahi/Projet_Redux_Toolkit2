import { configureStore } from "@reduxjs/toolkit";
import TutoReducer from "./TutoSlice";
export default configureStore({
  reducer: {
    tuto: TutoReducer,
  },
});
