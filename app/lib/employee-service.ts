import axios from "axios";

export default class EmployeeService{
  BASE_URL = "http://localhost:8000/api";
  
    public async createEmployee(employee: Employee): Promise<Employee> {
        let url = `${this.BASE_URL}/employees`; 
        const response = await axios.post(url, employee);
        return response.data;
      }
    
    public async getEmployee(id: string): Promise<Employee> {
        let url = `${this.BASE_URL}/employees`; 
        const response = await axios.get(`${url}/${id}`);
        return response.data as Employee;
      }
    
    public  async getEmployees(): Promise<Employee[]> {
        const response = await axios.get(`${this.BASE_URL}/employees`);
        return response.data;
      }

      public async updateEmployee(id: string, employee: Employee): Promise<Employee>{
        let url = `${this.BASE_URL}/employees/${id}`;
        const response = await axios.put(url, employee);
        return response.data;

      }
}