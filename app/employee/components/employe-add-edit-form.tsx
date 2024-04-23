"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import EmployeeService from '@/app/lib/employee-service';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function EmployeeAddEditForm(props: any) {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required").min(6, "Minimum length is 6 characters").max(10, "Max length is 10 characters"),
    lastName: Yup.string().required("Last name is required").min(6, "Minimum length is 6 characters").max(10, "Max length is 10 characters"),
    email: Yup.string().required("Email is required").email("Invalid email address"),
    phone: Yup.string().required("Phone number is required").matches(/^^\+94[1-9]\d{8}$/, "This should be a valid Sri Lankan phone no"),
    gender: Yup.string().matches(/^^[FM]$/, "Inavalid gender option")
  });

  const router = useRouter();
  const user = props?.user;
  const isAddMode = !user;
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  useEffect(() => {
    if (!isAddMode) {
      reset(props.user);
    }
  }, [])

  const employeeService = new EmployeeService();

  const EmployeeAddEditForm = async (data: any) => {
    try {
      if (isAddMode) {
        let employee: Employee = data as Employee;
        const createEmployee = await employeeService.createEmployee(employee);
      }
      else {
        let employee: Employee = data as Employee;
        const updatedEmployee = await employeeService.updateEmployee(employee.id, employee);
      }
      router.push("/employee/list");
    }
    catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="mx-auto card w-50">
      <form onSubmit={handleSubmit(EmployeeAddEditForm)}>
        <div className="row mb-2 mt-4">
          <div className="col d-flex justify-content-end">
            <label>First Name</label>
          </div>
          <div className="col">
            <input type="text" {...register("firstName")} id="firstName"></input>
            <div className="text-danger">{errors.firstName?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col d-flex justify-content-end">
            <label>Last Name</label>
          </div>
          <div className="col">
            <input type="text" {...register("lastName")} id="lastName"></input>
            <div className="text-danger">{errors.lastName?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col d-flex justify-content-end">
            <label>Email</label>
          </div>
          <div className="col">
            <input type="text" {...register("email")} id="email"></input>
            <div className="text-danger">{errors.email?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col d-flex justify-content-end">
            <label>Phone</label>
          </div>
          <div className="col">
            <input type="text" {...register("phone")} id="phone"></input>
            <div className="text-danger">{errors.phone?.message}</div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col d-flex justify-content-end">
            <label>Gender</label>
          </div>
          <div className="col" >
            <select id="gender" {...register("gender")}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className="text-danger">
            {errors.gender?.message}
          </div>
        </div>
        <div className="row d-flex mb-3 me-3">
          <div className="col flex-grow-1"></div>
          <div className="col d-flex justify-content-end">
            <button type="submit" className='btn btn-outline-primary'>{!isAddMode? "Update" : "Save"}</button>
          </div>
        </div>

      </form>
    </div>

   
  )
}