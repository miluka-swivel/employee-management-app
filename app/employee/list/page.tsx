"use client"
import { useEffect, useState } from "react";
import EmployeeGridView from "./employee-grid-view";
import EmployeeTable from "./employee-table";
import styles from '@/app/employee/employee.module.css';
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux"
import { fetchEmployees } from "@/app/redux/employee/employeeReduxHelper";
import { AppDispatch } from "@/app/redux/store";

export default function Page() {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const [currentView, setCurrentView] = useState('grid'); // 'grid' or 'table'
    const toggleEmployeeView = (view: string) => {
        setCurrentView(view);
    }
    const employees = useSelector((state : any) => state.storeEmployees.employees);
    const employeeStatus = useSelector((state: any) => state.storeEmployees.status);
    const error = useSelector((state: any) => state.storeEmployees.error);
    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(fetchEmployees())

            } catch (error) {
                //console.error('Error fetching data:', error);
                throw new Error('Error fetching employee data');
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container-md container-sm">
            <div className="d-flex mt-2 text-end justify-content-end align-items-center">
                <div className="me-2">
                    <button type="button" className={styles.button} onClick={() => router.push("/employee/add")}>ADD EMPLOYEE</button>
                </div>
                <div>
                <button data-testid="toggleviewbtn" type="button" className={`rounded-circle btn-lg ${styles.toggleviewbtn}`} onClick={() => toggleEmployeeView(currentView === 'grid' ? 'table' : 'grid')}><i data-testid='toggleviewbtn-i' className={`bi bi-${currentView === 'grid' ? 'list' : 'grid-fill'}`}></i></button>
                </div>
            </div>
            {currentView === 'grid' ? <EmployeeGridView employeesList={employees} /> : <EmployeeTable employeesList={employees} />}
        </div>
    )
}