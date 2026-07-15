import { Employee } from "../models/Employee"

export function isActiveEmployee(emp: Employee): boolean {
    return emp.status === "ACTIVE";
}