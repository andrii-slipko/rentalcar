import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { setFilteredCars } from './filtersSlice';

export const loadCars = createAsyncThunk(
  'cars/loadCars',
  async (_, { getState, dispatch }) => {
    const { filters } = getState();
    const params = {};

    if (filters.brand) params.brand = filters.brand;
    if (filters.price) params.rentalPrice = filters.price;

    const response = await axios.get('https://car-rental-api.goit.global/cars', { params });
    const cars = response.data.cars;

    const filteredCars = cars.filter((car) => {
      const { from, to } = filters.mileage;
      return (
        (from === "" || car.mileage >= from) &&
        (to === "" || car.mileage <= to)
      );
    });

    dispatch(setFilteredCars(filteredCars));
    return cars;  
  }
);

const carsSlice = createSlice({
  name: 'cars',
  initialState: { cars: [], status: 'idle', error: null },
  extraReducers: (builder) => {
    builder
      .addCase(loadCars.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCars.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cars = action.payload;  
      })
      .addCase(loadCars.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;