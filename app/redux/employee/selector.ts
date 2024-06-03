// selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
 // Adjust the import to match your store setup

export const selectEmployees = (state: RootState) => state.storeEmployees.employees;

export const selectFilteredEmployees = createSelector(
  [selectEmployees, (state: RootState, searchQuery: string) => searchQuery],
  (employees, searchQuery) => {
    if (!searchQuery) return employees;
    const lowercasedQuery = searchQuery.toLowerCase();
    return employees.filter(employee =>
      employee.firstName.toLowerCase().includes(lowercasedQuery) ||
      employee.lastName.toLowerCase().includes(lowercasedQuery) ||
      employee.email.toLowerCase().includes(lowercasedQuery) ||
      employee.phone.toLowerCase().includes(lowercasedQuery)
    );
  }
);
