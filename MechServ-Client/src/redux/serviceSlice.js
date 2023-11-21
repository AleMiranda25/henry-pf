import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  description: "",
  category: "",
  price: "",
  services: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServices: (state, action) => {
      const { name, description, category, price } = action.payload;
      state.name = name;
      state.description = description;
      state.category = category;
      state.price = price;
    },
    getAllServices: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { addServices, getAllServices } = serviceSlice.actions;
export default serviceSlice.reducer;
