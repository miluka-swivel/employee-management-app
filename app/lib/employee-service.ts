import axios from "axios";

export default class EmployeeService{
  BASE_URL = "http://localhost:8000/api";
  
  private mapToEmployee(data: any): Employee {
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
        let url = `${this.BASE_URL}/employees`; 
        const response = await axios.post(url, employee);
        return response.data;
      }
    
    public async getEmployee(id: string): Promise<Employee> {
        let url = `${this.BASE_URL}/employees`; 
        const response = await axios.get(`${url}/${id}`);
        return response?.data as Employee;
      }
    
    public  async getEmployees(): Promise<Employee[]> {
        const response = await axios.get(`${this.BASE_URL}/employees`);
        return response.data.map(this.mapToEmployee);
      }

      public async updateEmployee(id: string, employee: Employee): Promise<Employee>{
        let url = `${this.BASE_URL}/employees/${id}`;
        const response = await axios.put(url, employee);
        return response.data as Employee;

      }
}