import Link from "next/link";
import ConfirmationModal from "../components/employee-modal";
import { useState } from "react";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { removeEmployee } from "@/app/redux/employee/employeeReduxHelper";

export default function EmployeeCard(props: any) {
    const [isOpen, setOpen] = useState<boolean>(false);

    const getProfilePicture = (imagePath: string) => {
        if (!imagePath) {
            return "/images/no-profile.jpg";
        }
        return imagePath;
    }
    const dispatch = useDispatch<AppDispatch>();
    const deleteEmployee = async () => {
        try {
            const deletedEmployee = await dispatch(removeEmployee(props.id));
            setOpen(false);
        }
        catch (error) {
            console.error("Failed deleting employee", error);
        }

    }

    return (
        <div data-testid="employee-card" className="card p-3 mb-2 w-100">
            <img className="card-img-top" src={getProfilePicture(props.profilePicture)} alt="Profile Picture" />
            <div className="card-body d-flex flex-column align-items-start">
                <span>{props.firstName} {props.lastName}</span>
                <span>{props.email}</span>
                <span>{props.phoneNumber}</span>
                <div className="d-flex">
                    <span className="me-auto p-2">{props.gender == "M" ? "Male" : "Female"}</span>
                    <div className="d-flex">
                        <button type="button" className="btn btn-danger mx-2" onClick={() => setOpen(true)}><i className="bi bi-trash"></i></button>
                        <Link href={`edit/${props.id}`} className="btn btn-success"><i className="bi bi-person"></i></Link>
                    </div>
                </div>
            </div>
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