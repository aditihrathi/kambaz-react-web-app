import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentsReducer from "./Courses/People/reducer";

export const store = configureStore({
  reducer: {
    modules: modulesReducer,
    account: accountReducer,
    courses: coursesReducer,
    enrollments: enrollmentsReducer,
    assignments: assignmentsReducer,
  },
  
});
