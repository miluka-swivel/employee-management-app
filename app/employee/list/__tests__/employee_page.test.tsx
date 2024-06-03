// import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
// import EmployeeScreen from "@/app/employee/list/page";
// import '@testing-library/jest-dom'
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from '@reduxjs/toolkit';
// import { fetchEmployees } from '../../../redux/employee/employeeReduxHelper';


// jest.mock('next/navigation', () => ({
//   useRouter: jest.fn().mockReturnValue({
//     push: jest.fn(),
//   }),
// }));

// jest.mock("../../../lib/services/employee-service"); // Mock the EmployeeService

// // Mock store setup with thunk middleware
// const mockStore = configureStore();
// const initialState = {
//   storeEmployees: {
//     employees: [],
//     status: 'idle',
//     error: null,
//   },
// };
// const store = mockStore(initialState);

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useDispatch: () => jest.fn(),
// }));

// jest.mock("../../../redux/employee/employeeReduxHelper", () => ({
//   fetchEmployees: jest.fn(),
//   removeEmployee: jest.fn(() => ({ type: 'REMOVE_EMPLOYEE' })),
// }));

// jest.mock("../../../redux/employee/employeeReduxHelper");

// describe("employee list page", () => {

//   it("Should have Add Employee button text", async () => {

//     fetchEmployees.mockResolvedValueOnce()
//     render(
//       <Provider store={store}>
//         <EmployeeScreen />
//       </Provider>
//     );

//     const employeeBtn = await screen.findByText("ADD EMPLOYEE");
//     expect(employeeBtn).toBeInTheDocument();
//   });

// })


// // it('renders EmployeeGridView when currentView is grid', async () => {

// //   act(() => {
// //     render(<EmployeeScreen />);
// //   });
// //   await waitFor(() => {
// //     const gridView = screen.getByTestId('employee-grid-view'); // Assuming you have a test id for the EmployeeGridView component
// //     expect(gridView).toBeInTheDocument();
// //   });

// // });

// // it('Renders Table view when toggle button  is clicked', async () => {
// //   act(() => {
// //     render(<EmployeeScreen />);
// //   });
// //   const toggleBtn = screen.getByTestId("toggleviewbtn")
// //   await userEvent.click(toggleBtn);
// //   await waitFor(()=>{
// //     const list = screen.getByTestId('toggleviewbtn-i'); // Assuming you have a test id for the EmployeeGridView component
// //     expect(list).toHaveClass('bi-grid-fill');
// //   })
// // });

