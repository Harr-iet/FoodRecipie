import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../api/localStorage";
import { loginUserThunk, registerUserThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(user);
    return registerUserThunk("/auth/register", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login", user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, { payload }) => {
      state.user = { ...payload };
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { data } = payload;
        state.user = data;
        addUserToLocalStorage(data);
        toast.success(payload);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        const { data } = payload;
        console.log(data);
        toast.error(data);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { data } = payload;
        state.isLoading = false;
        state.user = data;
        addUserToLocalStorage(data);
        toast.success(`Welcome back ${data.firstName}`);
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        toast.error("Invalid Email or Passsword");
      });
  },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
