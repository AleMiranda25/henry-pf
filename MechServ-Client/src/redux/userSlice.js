import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { addUsers, changePassword } = userSlice.actions;
export default userSlice.reducer;
