import { Employee } from "../models/Employee";
import { ApiResponse } from "../interfaces/ApiResponse";

export class EmployeeService {
  private employees: Employee[] = [];

  addEmployee(emp: Employee): ApiResponse<Employee> {
    this.employees.push(emp);
    return { status: "success", data: emp };
  }

  async fetchEmployees(): Promise<ApiResponse<Employee[]>> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: "success", data: this.employees }), 1000);
    });
  }
}
