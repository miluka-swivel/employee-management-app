"use client"
import { useEffect, useState } from "react";
import EmployeeGridView from "./employee-grid-view";
import EmployeeTable from "./employee-table";
import styles from '@/app/employee/employee.module.css';
import { useRouter } from "next/navigation";
import { getEmployees } from "@/app/lib/employee-service";

export default function Page() {
    const router = useRouter();
    const [currentView, setCurrentView] = useState('grid'); // 'grid' or 'table'
    const toggleEmployeeView = (view: string) => {
        setCurrentView(view);
    }
    const [employees, SetEmployees] = useState<Employee[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeList = await getEmployees();
                SetEmployees(employeeList);
            } catch (error) {
                console.error('Error fetching data:', error);
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