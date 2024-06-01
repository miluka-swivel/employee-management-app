import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createEmployee, getEmployee, getEmployees, updateEmployee, deleteEmployee } from '../../lib/employee-service'; // Adjust the import according to your file structure

export const fetchEmployees = createAsyncThunk<IEmployee[]>('employees/fetchEmployees', async () => {
  const response = await getEmployees();
  return response;
});

export const fetchEmployee = createAsyncThunk<IEmployee, string>('employees/fetchEmployee', async (id: string) => {
  const response = await getEmployee(id);
  return response;
});

export const createNewEmployee = createAsyncThunk<IEmployee, IEmployee>('employees/createEmployee', async (employee: IEmployee) => {
  const response = await createEmployee(employee);
  return response;
});

export const updateExistingEmployee = createAsyncThunk<IEmployee, { id: string, employee: IEmployee }>('employees/updateEmployee', async ({ id, employee }) => {
  const response = await updateEmployee(id, employee);
  return response;
});

export const removeEmployee = createAsyncThunk<string, string>('employees/deleteEmployee', async (id: string) => {
  const response = await deleteEmployee(id);
  return id;
});
