import { render, screen } from "@testing-library/react";
import EmployeeAdd from "../app/employee/add/page"; // Assuming Page.tsx is in the same directory
import Styles from "@/app/employee/employee.module.css";
import '@testing-library/jest-dom'

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

describe("Add employee form", () => {

    test("renders List View link", () => {
        render(<EmployeeAdd />);
      
        const link = screen.getByRole("link", { name: /List View/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/employee/list");
        expect(link).toHaveClass(Styles.button); // Assuming Styles.button is a CSS class
      });

      test("renders EmployeeAddEditForm component with save button", () => {
        render(<EmployeeAdd />);
      
        const form = screen.getByTestId("employee-add-edit-form"); // Assuming EmployeeAddEditForm has a data-testid
        expect(form).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /Save/i }));
      });
      
      
});