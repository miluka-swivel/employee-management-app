import Link from "next/link";

const GenerateTableRows = (employees : IEmployee[]) => {

    const getProfilePicture = (imagePath: string) => {
        if (!imagePath) {
            return "/images/no-profile.jpg";
        }
        return imagePath;
    }

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
                        <button type="button" className="btn btn-danger mx-2"><i className="bi bi-trash"></i></button>
                        <Link href={`edit/${employee.id}`} className="btn btn-success"><i className="bi bi-person"/></Link>
                    </div>
                </td>
            </tr>
        )
    });
}

export default function EmployeeTable(props : any) {
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
        </div>
    );
}