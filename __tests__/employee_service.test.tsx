// EmployeeService.test.ts
import axios from 'axios';
import EmployeeService from '../app/lib/employee-service'; // Assuming this is the path to your service

jest.mock('axios'); // Mock axios for controlled testing

describe('EmployeeService', () => {
  let mockAxios: jest.Mocked<typeof axios>;
  let employeeService: EmployeeService;
  let employeeData: any;

  beforeEach(() => {
    mockAxios = axios as jest.Mocked<typeof axios>;
    employeeService = new EmployeeService();
    employeeData = {
      _id: '123',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      gender: 'male',
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createEmployee', () => {
    it('should create a new employee', async () => {
      mockAxios.post.mockResolvedValueOnce({ data: employeeData });

      const createdEmployee = await employeeService.createEmployee(employeeData);

      expect(createdEmployee).toEqual(employeeData); // Assert exact employee data
      expect(mockAxios.post).toHaveBeenCalledWith(
        `${employeeService.baseUrl}/employees`,
        employeeData
      );
    });

    it('should throw an error on server error', async () => {
      mockAxios.post.mockRejectedValueOnce(new Error('Server error'));
      await expect(employeeService.createEmployee(employeeData)).rejects.toThrowError('Server error');
    });
  });

  describe('getEmployee', () => {
    it('should retrieve an employee by ID', async () => {
      const id = '123';
      mockAxios.get.mockResolvedValueOnce({ data: employeeData });

      const retrievedEmployee = await employeeService.getEmployee(id);

      expect(retrievedEmployee).toEqual(employeeData); // Assert exact employee data
      expect(mockAxios.get).toHaveBeenCalledWith(`${employeeService.baseUrl}/employees/${id}`);
    });

    it('should return null if employee not found', async () => {
      const id = '456';
      mockAxios.get.mockResolvedValueOnce({ data: null });

      const retrievedEmployee = await employeeService.getEmployee(id);

      expect(retrievedEmployee).toBeNull();
    });

    it('should throw an error on server error', async () => {
      const id = '123';
      mockAxios.get.mockRejectedValueOnce(new Error('Server error'));

      await expect(employeeService.getEmployee(id)).rejects.toThrowError('Server error');
    });
  });

  describe('getEmployees', () => {
    it('should retrieve a list of employees', async () => {
      const employeeList = [employeeData, { ...employeeData, _id: '456' }];
      mockAxios.get.mockResolvedValueOnce({ data: employeeList });

      const retrievedEmployees = await employeeService.getEmployees();

      expect(retrievedEmployees).toEqual(employeeList.map(employeeService.mapToEmployee));
      expect(mockAxios.get).toHaveBeenCalledWith(`${employeeService.baseUrl}/employees`);
    });

    it('should throw an error on server error', async () => {
      mockAxios.get.mockRejectedValueOnce(new Error('Server error'));

      await expect(employeeService.getEmployees()).rejects.toThrowError('Server error');
    });
  });

  describe('updateEmployee', () => {
    it('should update an employee', async () => {
      const id = '123';
      const updatedEmployee = { ...employeeData, email: 'updated@example.com' };
      mockAxios.put.mockResolvedValueOnce({ data: updatedEmployee });

      const returnedEmployee = await employeeService.updateEmployee(id, updatedEmployee);

      expect(returnedEmployee).toEqual(updatedEmployee); // Assert exact employee data
      expect(mockAxios.put).toHaveBeenCalledWith(`${employeeService.baseUrl}/employees/${id}`, updatedEmployee);
    });
    
  });
 
});
