import EmployeeAddEditForm from "../../components/employe-add-edit-form";
import Link from "next/link";
import Styles from "@/app/employee/employee.module.css";
import { getEmployee } from "@/app/lib/employee-service";

async function getData(id: string) {
  return await getEmployee(id);
}

export default async function Page(params: EmployeeEditParam) {
  const { employeeId } = params.params;
  let employeeData = await getData(employeeId);
  employeeData.id = employeeId;
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-end mb-3">
          <Link href={"/employee/list"} className={Styles.button}>List View</Link>
        </div>
        <EmployeeAddEditForm user={employeeData}></EmployeeAddEditForm>
      </div >
    </div >
  );
}