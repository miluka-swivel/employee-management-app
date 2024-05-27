import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchEmployees, fetchEmployee, createNewEmployee, updateExistingEmployee } from './employeeReduxHelper';


type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

const initialState: {
    employees: IEmployee[],
    status: Status,
    error: string | undefined,
  } = {
    employees: [],
    status: 'idle',
    error: undefined,
  };
  
const employeeSlice = createSlice({
    name : "employee",
    initialState,
    reducers: {
        // addEmployee: (state, action) => {
        //     state.value.push(action.payload)
        // }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchEmployees.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchEmployees.fulfilled, (state, action: PayloadAction<IEmployee[]>) => {
            state.status = 'succeeded';
            state.employees = action.payload;
          })
          .addCase(fetchEmployees.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          // Similar cases for fetchEmployee, createNewEmployee, and updateExistingEmployee
          .addCase(fetchEmployee.fulfilled, (state, action) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
              state.employees[index] = action.payload;
            } else {
              state.employees.push(action.payload);
            }
          })
          .addCase(createNewEmployee.fulfilled, (state, action : PayloadAction<IEmployee>) => {
            state.employees.push(action.payload);
          })
          .addCase(updateExistingEmployee.fulfilled, (state, action) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
              state.employees[index] = action.payload;
            }
          });
      },
})

export default employeeSlice.reducer;