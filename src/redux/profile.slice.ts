import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export type ProfileState = {
  name: string;
  email: string;
  hobbies: string[];
  birthday: Date | dayjs.Dayjs | string;
};

const initialState: ProfileState = {
  name: "",
  email: "",
  hobbies: [],
  birthday: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setHobbies: (state, action) => {
      state.hobbies = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
  },
});

export const { setName, setEmail, setHobbies, setBirthday } =
  profileSlice.actions;

export default profileSlice.reducer;
