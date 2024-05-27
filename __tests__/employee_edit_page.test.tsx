import { render, screen, waitFor } from '@testing-library/react';
import EmployeeEdit from '../app/employee/edit/[employeeId]/page'; // Assuming the component is named EmployeeEdit
//import { getEmployee } from '@/app/lib/employee-service'; // Import the function to mock


// jest.mock('../app/lib/employee-service', () => ({
//     getEmployee: jest.fn().mockResolvedValue({
//         id: 1,
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com',
//         phone: '+94771234567',
//         gender: 'M',
//     }),
// }));

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

jest.mock('../app/lib/employee-service');
const { getEmployee } = require('../app/lib/employee-service'); // Mock import

describe('EmployeeEdit component', () => {
    const mockEmployeeData = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '+94771234567',
        gender: 'M',
    };

    beforeEach(async () => {
        await getEmployee.mockResolvedValue(mockEmployeeData); // Reset mocks before each test
    });

    it('renders the employee edit form with mocked data', async () => {
        const id = '123';
        const { params: { employeeId } } = { params: { employeeId: id } };
        await render(<EmployeeEdit params={{ employeeId }} />);
        await waitFor(() => {
            expect(screen.getByText('John Doe')).toBeInTheDocument();
            expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
        })
    });

    // it('renders the "List View" link', async () => {
    //     const employeeId = '123';
    //     await render(<EmployeeEdit params={{ params: { employeeId } }} />);

    //     // Assert link presence and href using screen.getByRole
    //     const listViewLink = screen.getByRole('link', { name: /List View/i });
    //     expect(listViewLink).toBeInTheDocument();
    //     expect(listViewLink).toHaveAttribute('href', '/employee/list');
    // });
});
