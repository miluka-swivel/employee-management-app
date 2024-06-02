import { render, screen, waitFor } from '@testing-library/react';
import EmployeeEdit from '../page'; // Assuming the component is named EmployeeEdit
import { getEmployee } from "../../../../lib/services/employee-service";

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

//const { getEmployee } = require('../app/lib/employee-service'); // Mock import
jest.mock("../../../../lib/services/employee-service");

// describe('EmployeeEdit component', () => {
//     const mockEmployeeData = {
//         id: "123",
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john.doe@example.com',
//         phone: '+94771234567',
//         gender: 'M',
//     };


//     it('renders the employee edit form with mocked data', async () => {
//         const id = '123';
//         const { params: { employeeId } } = { params: { employeeId: id } };
//         console.log(getEmployee);
//         (getEmployee as jest.Mock).mockResolvedValue(mockEmployeeData);
//         const mockEmployeeEditParam: EmployeeEditParam = {
//             params: {
//                 employeeId: '123'
//             }
//         };
//         console.log(mockEmployeeEditParam.params);
//         await render(<EmployeeEdit params={mockEmployeeEditParam.params} />);
//         await waitFor(() => {
//             expect(screen.getByText('John Doe')).toBeInTheDocument();
//             expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
//         })
//     });

//     // it('renders the "List View" link', async () => {
//     //     const employeeId = '123';
//     //     await render(<EmployeeEdit params={{ params: { employeeId } }} />);

//     //     // Assert link presence and href using screen.getByRole
//     //     const listViewLink = screen.getByRole('link', { name: /List View/i });
//     //     expect(listViewLink).toBeInTheDocument();
//     //     expect(listViewLink).toHaveAttribute('href', '/employee/list');
//     // });
// });
