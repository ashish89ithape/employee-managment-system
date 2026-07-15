"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmployeeService_1 = require("./services/EmployeeService");
const employees_1 = require("./data/employees");
const service = new EmployeeService_1.EmployeeService();
employees_1.employees.forEach(emp => service.addEmployee(emp));
service.fetchEmployees().then(res => console.log(res.data));
//# sourceMappingURL=app.js.map