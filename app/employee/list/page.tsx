"use client"
import { useState } from "react";
import EmployeeGridView from "./employee-grid-view";
import EmployeeTable from "./employee-table";
import styles from '@/app/employee/employee.module.css';
import { useRouter } from "next/navigation";



export default function Page()
{
    const router = useRouter()
    const [currentView, setCurrentView] = useState('grid'); // 'grid' or 'table'
    const toggleEmployeeView = (view: string) => {
        setCurrentView(view);
    }
    
   return (
    <div className="container-md container-sm">
        <div className="d-flex mt-2 text-end justify-content-end align-items-center">
        <div className="me-2">
            <button type="button"  className={styles.button} onClick={() => router.push("/employee/add")}>ADD EMPLOYEE</button>
        </div>
        <div>
            <button type="button" className={`rounded-circle btn-lg ${styles.toggleviewbtn}`} onClick={() => toggleEmployeeView(currentView === 'grid' ? 'table' : 'grid')}><i className={`bi bi-${currentView === 'grid' ? 'list' : 'grid-fill'}`}></i></button>
        </div>
        </div>
        {currentView === 'grid' ? <EmployeeGridView /> : <EmployeeTable />}
    </div>
)
}