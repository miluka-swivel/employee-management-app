import { render, screen } from '@testing-library/react';
import EmployeeGridView from '@/app/employee/list/employee-grid-view';


// Mock EmployeeCard component
jest.mock('../../list/employee-card', () => {
    () => <div data-testid="mock-employee-card" />
});

describe('EmployeeGridView component', () => {
    it('renders without crashing', () => {
        render(<EmployeeGridView employeesList={[]} />);
    });

    it('renders correct number of rows and columns', () => {
        const employeesList = [
            { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890', gender: 'male' },
            { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane@example.com', phone: '0987654321', gender: 'female' }
        ];
        render(<EmployeeGridView employeesList={employeesList} />);

        // Check if correct number of rows are rendered
        // const rows = screen.getAllByRole('row');
        const rows = document.querySelectorAll(".row");
        expect(rows).not.toBeNull();
        if (rows) {
            expect(Array.prototype.slice.call(rows)).toHaveLength(1);
        }

        // Check if correct number of columns are rendered
        const columns = document.querySelectorAll(".col-md-3");
        expect(columns).not.toBeNull();
        if (columns) {
            expect(Array.prototype.slice.call(columns)).toHaveLength(2);
        }

        const employeeCards = screen.getAllByTestId('mock-employee-card');
        expect(employeeCards).toHaveLength(2);
    });

});
