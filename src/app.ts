import { EmployeeService } from "./services/EmployeeService";
import { employees } from "./data/employees";

const service = new EmployeeService();

employees.forEach(emp => service.addEmployee(emp));

service.fetchEmployees().then(res => console.log(res.data));
