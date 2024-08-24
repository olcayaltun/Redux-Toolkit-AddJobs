import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./Slice/JobSlice";

export default configureStore({
  reducer: { jobReducer },
});
