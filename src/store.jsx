import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";


  
  const reducer = combineReducers({
    user:userSlice,
   
  })
  
   export const store = configureStore({
    reducer
  });