import {screen} from '@testing-library/react'
import EmployeeEdit from '@/app/employee/edit/[employeeId]/page'
import { render } from '@testing-library/react';

// Mock the EmployeeService
jest.mock("../app/lib/employee-service");
const EmployeeServiceMock = jest.fn();

describe("Employee edit page", () => {
    it("Should have List View text", async () => {
        const id: string = "123";
        //await render(<EmployeeEdit employeeId = {id}/>);
        const employeeBtn = screen.getByRole( "link", {name : "List View"});
        expect(employeeBtn).toBeInTheDocument();
    })
});