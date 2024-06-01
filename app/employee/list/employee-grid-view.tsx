import EmployeeCard from "./employee-card";
const renderRows = (employees: IEmployee[]) => {
  return employees?.reduce((rows: JSX.Element[][], employee: IEmployee, index: number) => {
    if (index % 4 === 0) {
      rows.push([]);
    }
    rows[rows.length - 1].push(
      <div key={index} className="col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
        <EmployeeCard
          id = {employee.id}
          firstName={employee.firstName}
          lastName={employee.lastName}
          email={employee.email}
          phoneNumber={employee.phone}
          gender={employee.gender}
          profilePicture={undefined}
        />
      </div>
    );
    return rows;
  }, []).map((row: JSX.Element[], rowIndex: number) => (
    <div key={rowIndex} className="row">
      {row}
    </div>
  ));
};

export default function EmployeeGridView(props: any) {
  return (
    <div data-testid="employee-grid-view" className="p-3">
      {renderRows(props.employeesList)}
    </div>
  );
}