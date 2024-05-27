import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EmployeeTable from '@/app/employee/list/employee-table';

// Mock employee data
const mockEmployees: IEmployee[] = [
    { id: "1", firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890', gender: 'M' },
    { id: "2", firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '0987654321', gender: 'F' }
];

describe('EmployeeTable component', () => {
    it('renders correctly with employee data', () => {
        const { getByTestId, getByText } = render(<EmployeeTable employeesList={mockEmployees} />);

        // Check if the table is rendered
        const table = getByTestId('employee-table-view');
        expect(table).toBeInTheDocument();

        // Check if employee data is rendered correctly
        mockEmployees.forEach(employee => {
            expect(getByText(employee.firstName)).toBeInTheDocument();
            //   expect(getByText(employee.lastName)).toBeInTheDocument();
            expect(getByText(employee.email)).toBeInTheDocument();
            expect(getByText(employee.phone)).toBeInTheDocument();
            expect(getByText(employee.gender === 'M' ? 'Male' : 'Female')).toBeInTheDocument();
        });
    });

    it('renders default profile picture when image path is empty', () => {
        const { getAllByAltText } = render(<EmployeeTable employeesList={mockEmployees} />);

        // Check if default profile picture is rendered for each employee
        const defaultProfilePictures = getAllByAltText('Profile Picture');
        expect(defaultProfilePictures.length).toBe(mockEmployees.length);
        defaultProfilePictures.forEach(picture => {
            expect(picture).toHaveAttribute('src', '/images/no-profile.jpg');
        });
    });

});
