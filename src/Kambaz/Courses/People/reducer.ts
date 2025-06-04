import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type EnrollmentState = Record<string, string[]>; // userId -> list of courseIds

const initialState: EnrollmentState = {};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      if (!state[userId]) {
        state[userId] = [];
      }
      if (!state[userId].includes(courseId)) {
        state[userId].push(courseId);
      }
    },
    unenroll: (state, action: PayloadAction<{ userId: string; courseId: string }>) => {
      const { userId, courseId } = action.payload;
      if (state[userId]) {
        state[userId] = state[userId].filter((id) => id !== courseId);
      }
    },
    resetEnrollments: () => initialState,
  },
});

export const { enroll, unenroll, resetEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
