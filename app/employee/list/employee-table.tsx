import Link from "next/link";
import ConfirmationModal from "../../components/employee-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { removeEmployee } from "@/app/redux/employee/employeeReduxHelper";

export default function EmployeeTable(props: any) {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>();

    const dispatch = useDispatch<AppDispatch>();

    const getProfilePicture = (imagePath: string) => {
        if (!imagePath) {
            return "/images/no-profile.jpg";
        }
        return imagePath;
    }

    const showDeleteModal = (employee: IEmployee) => {
        setSelectedEmployee(employee);
        setOpen(true);

    }

    const deleteEmployee = async () => {
        try {
            if (selectedEmployee) {
                const deletedEmployee = await dispatch(removeEmployee(selectedEmployee.id));
                setOpen(false);
            }
        }
        catch (error) {
            console.error("Failed deleting employee", error);
        }

    }

    const GenerateTableRows = (employees: IEmployee[]) => {

        return employees?.map((employee, index: number) => {
            return (
                <tr key={index}>
                    <td>
                        <img src={getProfilePicture("")} width={128} height={128} alt="Profile Picture" />
                    </td>
                    <td>
                        {employee.firstName}
                    </td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.gender == "M" ? "Male" : "Female"}</td>
                    <td>
                        <div className="d-flex">
                            <button type="button" className="btn btn-danger mx-2" onClick={() => showDeleteModal(employee)}><i className="bi bi-trash"></i></button>
                            <Link href={`edit/${employee.id}`} className="btn btn-success"><i className="bi bi-person" /></Link>
                        </div>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div data-testid="employee-table-view" className="p-5">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {GenerateTableRows(props.employeesList)}
                </tbody>
            </table>

            <ConfirmationModal title="Delete Employee"
            message="Are you sure you want to delete employee?"
            show={isOpen}
            handleConfirm={deleteEmployee}
            handleClose={() => setOpen(false)}
            closeButtonText="No"
            confirmButtonText="Yes">

        </ConfirmationModal>
        </div>
    );
}