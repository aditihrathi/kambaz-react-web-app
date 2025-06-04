import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: db.assignments,
  reducers: {
    addAssignment: (state, action) => {
      state.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      return state.filter((a) => a._id !== action.payload);
    },
    updateAssignment: (state, action) => {
      return state.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
