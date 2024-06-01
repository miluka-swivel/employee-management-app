import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_SERVICE_BASE_URL;
function mapToEmployee(data: any): IEmployee {
  return {
    id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    gender: data.gender,
  };
}

async function createEmployee(employee: IEmployee): Promise<IEmployee> {
  let url = `${baseUrl}/employees`;
  const response = await axios.post(url, employee);
  return response.data;
}

async function getEmployee(id: string): Promise<IEmployee> {
  let url = `${baseUrl}/employees`;
  const response = await axios.get(`${url}/${id}`);
  return response?.data as IEmployee;
}

async function getEmployees(): Promise<IEmployee[]> {
  const response = await axios.get(`${baseUrl}/employees`);
  return response.data.map(mapToEmployee);
}

async function updateEmployee(id: string, employee: IEmployee): Promise<IEmployee> {
  let url = `${baseUrl}/employees/${id}`;
  const response = await axios.put(url, employee);
  return response.data as IEmployee;

}

async function deleteEmployee(id: string): Promise<boolean> {
  let url = `${baseUrl}/employees/${id}`;
  const response = await axios.delete(url);
  return response.data as boolean;
}

export { createEmployee, getEmployee, getEmployees, updateEmployee, mapToEmployee, deleteEmployee };
