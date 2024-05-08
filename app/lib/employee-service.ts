import axios from "axios";

export default class EmployeeService {
  baseUrl = process.env.NEXT_PUBLIC_SERVICE_BASE_URL;
  public mapToEmployee(data: any): Employee {
    return {
      id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      gender: data.gender,
    };
  }
  public async createEmployee(employee: Employee): Promise<Employee> { 
    let url = `${this.baseUrl}/employees`;
    const response = await axios.post(url, employee);
    return response.data;
  }

  public async getEmployee(id: string): Promise<Employee> {
    let url = `${this.baseUrl}/employees`;
    const response = await axios.get(`${url}/${id}`);
    return response?.data as Employee;
  }

  public async getEmployees(): Promise<Employee[]> {
    const response = await axios.get(`${this.baseUrl}/employees`);
    return response.data.map(this.mapToEmployee);
  }

  public async updateEmployee(id: string, employee: Employee): Promise<Employee> {
    let url = `${this.baseUrl}/employees/${id}`;
    const response = await axios.put(url, employee);
    return response.data as Employee;

  }
}