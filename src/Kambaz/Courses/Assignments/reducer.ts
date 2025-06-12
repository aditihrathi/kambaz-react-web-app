import { createSlice } from "@reduxjs/toolkit";

export interface Assignment {
  _id: string;
  course: string;
  title: string;
  description: string;
  points: number;
  due: string;
  availableFrom: string;
  availableUntil: string;
}



const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: [] as Assignment[],
  reducers: {
    setAssignments: (_, action: { payload: Assignment[] }) => action.payload,

    addAssignment: (state, action: { payload: Assignment }) => {
      state.push(action.payload);
    },
    deleteAssignment: (state, action: { payload: string }) => {
      return state.filter((a) => a._id !== action.payload);
    },
    updateAssignment: (state, action: { payload: Assignment }) => {
      return state.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
  },
});



export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
