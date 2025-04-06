import { createSlice } from '@reduxjs/toolkit'; 

const initialState = {
  brand: "",
  price: "",
  mileage: { from: "", to: "" },
  filteredCars: [],  
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,  
  reducers: {
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      if (name === "mileage") {
        state.mileage = { ...state.mileage, ...value };
      } else {
        state[name] = value;
      }
    },
    clearFilters: (state) => {
      state.brand = "";
      state.price = "";
      state.mileage = { from: "", to: "" };
      state.filteredCars = [];
    },
    setFilteredCars: (state, action) => {
      state.filteredCars = action.payload; 
    },
    filterCarsByMileage: (state, action) => {
      const { mileageFrom, mileageTo } = action.payload;
      state.filteredCars = state.filteredCars.filter((car) => {
        const mileage = car.mileage;
        return (
          (mileageFrom === "" || mileage >= mileageFrom) &&
          (mileageTo === "" || mileage <= mileageTo)
        );
      });
    }
  },
});

export const { updateFilters, clearFilters, setFilteredCars, filterCarsByMileage } = filtersSlice.actions;
export default filtersSlice.reducer;
