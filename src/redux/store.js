import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./carsSlice";
import filtersReducer from "./filtersSlice";


const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});

export default store;