import EmployeeService from "@/app/lib/employee-service";
import EmployeeAddEditForm from "../../components/employe-add-edit-form";
import Link from "next/link";
import Styles from "@/app/employee/employee.module.css";

async function getData(id: string) {
  const employeeService = new EmployeeService();
  return await employeeService.getEmployee(id);
}

export default async function Page(params: { params: { employeeId: string } }) {
  const { employeeId } = params.params;
  let employeeData = await getData("6624589ca7c26e1bbfad47d1");
  employeeData.id = employeeId;
  console.log(employeeId);
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