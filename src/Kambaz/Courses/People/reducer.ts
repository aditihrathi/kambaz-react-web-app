import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as client from "./client";

export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  const users = await client.findAllUsers();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: [] as any[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export default usersSlice.reducer;
