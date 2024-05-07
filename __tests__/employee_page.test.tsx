import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import EmployeeScreen from "@/app/employee/list/page";
import '@testing-library/jest-dom'
import React from 'react';


jest.mock('next/navigation');
const useRouterMock = jest.fn();
useRouterMock.mockReturnValue(
  { push: jest.fn() }
);

jest.mock("../app/lib/employee-service"); // Mock the EmployeeService
const EmployeeServiceMock = jest.fn();


it("Should have Add Employee button text", async () => {
  render(<EmployeeScreen />);

  const employeeBtn = await screen.findByText("ADD EMPLOYEE");
  expect(employeeBtn).toBeInTheDocument();
});

it('renders EmployeeGridView when currentView is grid', async () => {

  act(() => {
    render(<EmployeeScreen />);
  });
  await waitFor(() => {
    const gridView = screen.getByTestId('employee-grid-view'); // Assuming you have a test id for the EmployeeGridView component
    expect(gridView).toBeInTheDocument();
  });

});

it('Renders Table view when toggle button  is clicked', () => {
  const { getByTestId } = render(<EmployeeScreen />);
  const gridToggleButton = document.querySelector(`.toggleviewbtn .bi.bi-list`);
  if (gridToggleButton) {
    act(() => {
      fireEvent.click(gridToggleButton);
    })
    const gridView = getByTestId('employee-table-view');
    expect(gridView).toBeInTheDocument();

  } else {
    throw new Error('Grid toggle button not found');
  }
});

