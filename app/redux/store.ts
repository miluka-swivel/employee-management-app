import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeSlice";

export const store = configureStore({
    reducer: {
       storeEmployees : employeeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;