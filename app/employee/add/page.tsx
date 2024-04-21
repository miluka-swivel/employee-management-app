
import EmployeeAddEditForm from "../components/employe-add-edit-form";
import Styles from "@/app/employee/employee.module.css";
import Link from "next/link";

export default function Page() {
    return (
        <div className="container">
            <div>
                <div className="d-flex justify-content-end mb-3">
                    {/* <button type="button" className={Styles.employeebtn} onClick={handleClick}>List View</button> */}
                    <Link href={"/employee/list"} className={Styles.button}>List View</Link>
                </div>
                <EmployeeAddEditForm></EmployeeAddEditForm>
            </div>
        </div>
    );
}