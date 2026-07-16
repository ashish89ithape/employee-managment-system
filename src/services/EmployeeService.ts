import { Employee } from "../models/Employee";
import { ApiResponse } from "../interfaces/ApiResponse";
import { saveToLocalStorage,getFromLocalStorage } from "../storage/localStorage";
import { Status } from "../types/Status";
import { Role } from "../types/Role";
export class EmployeeService {
  private employees: Employee[] = [];

  constructor() {
    // Load employees from localStorage when service starts
    const stored = getFromLocalStorage<Employee[]>("employees");
    console.log(stored);
    if(stored){
      this.employees =stored.map(
        e=>new Employee(e.id, e.name, e.role as Role, e.status as Status, e.age )
      )
    }
  }

  addEmployee(emp: Employee): ApiResponse<Employee> {
    this.employees.push(emp);
    localStorage.removeItem("employees");
    saveToLocalStorage("employees",this.employees);
    return { status: "success", data: emp };
  }

  removeEmployee(id:number):ApiResponse<Employee[]>{
    this.employees =this.employees.filter(emp=>emp.id != id);
    saveToLocalStorage("employees", this.employees);
    return {status:"success", data:this.employees};
  }

  async fetchEmployees(): Promise<ApiResponse<Employee[]>> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: "success", data: this.employees }), 1000);
    });
  }
}
