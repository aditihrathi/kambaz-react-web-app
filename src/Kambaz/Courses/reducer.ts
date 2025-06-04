import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";

const coursesSlice = createSlice({
  name: "courses",
  initialState: db.courses,
  reducers: {
    addCourse: (state, action) => {
      const newCourse = { ...action.payload, _id: uuidv4() };
      state.push(newCourse);
    },
    deleteCourse: (state, action) => {
      return state.filter((course: any) => course._id !== action.payload);
    },
    updateCourse: (state, action) => {
      return state.map((course: any) =>
        course._id === action.payload._id ? { ...action.payload } : course
      );
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
