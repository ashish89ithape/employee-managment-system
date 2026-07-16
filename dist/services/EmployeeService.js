import { Employee } from "../models/Employee";
import { saveToLocalStorage, getFromLocalStorage } from "../storage/localStorage";
export class EmployeeService {
    constructor() {
        this.employees = [];
        // Load employees from localStorage when service starts
        const stored = getFromLocalStorage("employees");
        console.log(stored);
        if (stored) {
            this.employees = stored.map(e => new Employee(e.id, e.name, e.role, e.status, e.age));
        }
    }
    addEmployee(emp) {
        this.employees.push(emp);
        localStorage.removeItem("employees");
        saveToLocalStorage("employees", this.employees);
        return { status: "success", data: emp };
    }
    removeEmployee(id) {
        this.employees = this.employees.filter(emp => emp.id != id);
        saveToLocalStorage("employees", this.employees);
        return { status: "success", data: this.employees };
    }
    async fetchEmployees() {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ status: "success", data: this.employees }), 1000);
        });
    }
}
