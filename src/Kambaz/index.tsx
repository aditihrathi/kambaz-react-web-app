import { Routes, Route, Navigate } from "react-router-dom";
import "./styles.css";

import KambazNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account"; 
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Courses/client.ts";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    <Session>
      <div>
        <div
          id="wd-kambaz-navigation"
          className="collapse d-md-block position-fixed bottom-0 top-0 bg-black z-2"
          style={{ width: 110 }}
        ></div>

        <div id="wd-kambaz">
          <KambazNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={[]} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Session>
  );
}
