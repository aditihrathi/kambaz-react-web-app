const Database: any = require("../../Database/index.js");

export const findPeopleInCourse = (courseId: string) => {
  return Database.enrollments
    .filter((e: { course: string; }) => e.course === courseId)
    .map((e: { user: any; }) => Database.users.find((u: { _id: any; }) => u._id === e.user));
};

export const findAllUsers = () => Database.users;

export const createUser = (user: any) => {
  const newUser = { ...user, _id: Date.now().toString() };
  Database.users.push(newUser);
  return newUser;
};

export const updateUser = (user: any) => {
  const index = Database.users.findIndex((u: { _id: any; }) => u._id === user._id);
  if (index !== -1) Database.users[index] = user;
  return user;
};

export const deleteUser = (userId: string) => {
  Database.users = Database.users.filter((u: { _id: string; }) => u._id !== userId);
};
