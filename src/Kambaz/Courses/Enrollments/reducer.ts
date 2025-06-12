import { createSlice } from "@reduxjs/toolkit";

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState: [] as any[],
  reducers: {
    setEnrollments: (state, action) => action.payload,
    addEnrollment: (state, action) => {
      state.push(action.payload);
    },
    deleteEnrollment: (state, action) =>
      state.filter((e) => e.course !== action.payload.course || e.user !== action.payload.user),
  },
});

export const { setEnrollments, addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
