import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployeeAddEditForm from '../employe-add-edit-form'; // Replace with your component path
import '@testing-library/jest-dom';
import { createEmployee, updateEmployee } from '../../lib/services/employee-service';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Mock store setup
const mockStore = configureStore([]);
const store = mockStore({});

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => jest.fn()
}));

jest.mock("../../redux/employee/employeeReduxHelper", () => ({
    removeEmployee: jest.fn(() => ({ type: 'REMOVE_EMPLOYEE' }))
}));


jest.mock('../../lib/services/employee-service', () => ({
    createEmployee: jest.fn(),
    updateEmployee: jest.fn()
}));


jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            route: "",
            pathname: "",
            query: "",
            asPath: "",
            push: jest.fn()
        };
    },
}));

const useRouter = jest.spyOn(require("next/navigation"), "useRouter");



describe('EmployeeAddEditForm component', () => {
    beforeEach(()=> {
        jest.clearAllMocks();
    })

    // Test case for rendering in add mode
    it('renders the form in add mode', async () => {
        act(() => {

            render(
                <Provider store={store}>
                    <EmployeeAddEditForm />
                </Provider>)
        });

        await waitFor(() => {
            expect(screen.getByLabelText('First Name')).toBeInTheDocument();
            expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
            expect(screen.getByLabelText('Email')).toBeInTheDocument();
            expect(screen.getByLabelText('Phone')).toBeInTheDocument();
            expect(screen.getByLabelText('Gender')).toBeInTheDocument();
            expect(screen.getByText('Save')).toBeInTheDocument();
        });
    });

    // Test case for rendering in edit mode
    it('renders the form in edit mode with pre-filled data', () => {
        const user = {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+94771234567',
            gender: 'M',
        };

        render(
            <Provider store={store}>
                <EmployeeAddEditForm user={user} />
            </Provider>
        );

        expect(screen.getByDisplayValue('John')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Doe')).toBeInTheDocument();
        expect(screen.getByDisplayValue('john.doe@example.com')).toBeInTheDocument();
        expect(screen.getByDisplayValue('+94771234567')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Male')).toBeInTheDocument();
        expect(screen.getByText('Update')).toBeInTheDocument();
    });

    //Test cases for form field validation (similar structure for each field)
    it('validates required fields', async () => {

        render(
            <Provider store={store}>
                <EmployeeAddEditForm />
            </Provider>

        );

        await act(async () => {
            await userEvent.click(screen.getByText('Save'));
        });
        expect(screen.getByText('First name is required')).toBeInTheDocument();
        expect(screen.getByText('Last name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    });

    // it('submits the form successfully in add mode', async () => {

    //     useRouter.mockImplementation(() => ({
    //         route: "/",
    //         pathname: "",
    //         query: "",
    //         asPath: "",
    //         push: jest.fn()
    //     }));

    //     render(
    //         <Provider store={store}>
    //             <EmployeeAddEditForm />
    //         </Provider>
    //     );

    //     // Simulate user input
    //     const firstNameInput = screen.getByLabelText('First Name');
    //     const lastNameInput = screen.getByLabelText('Last Name');
    //     const emailInput = screen.getByLabelText('Email');
    //     const phoneInput = screen.getByLabelText('Phone');
    //     const genderSelect = screen.getByLabelText('Gender');

    //     await userEvent.type(firstNameInput, 'John Doe');
    //     await userEvent.type(lastNameInput, 'Doe Brown');
    //     await userEvent.type(emailInput, 'john.doe@example.com');
    //     await userEvent.type(phoneInput, '+94771234567');
    //     userEvent.selectOptions(genderSelect, 'M');

    //     // Submit the form

    //     fireEvent.submit(screen.getByTestId('submitbtn'));
    //     console.log("Submit button clicked");

    //     // Expect successful service call and navigation
    //     await waitFor(() => expect(createEmployee).toHaveBeenCalledTimes(1));
    // });


});
