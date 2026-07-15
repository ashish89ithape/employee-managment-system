"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
class EmployeeService {
    constructor() {
        this.employees = [];
    }
    addEmployee(emp) {
        this.employees.push(emp);
        return { status: "success", data: emp };
    }
    async fetchEmployees() {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ status: "success", data: this.employees }), 1000);
        });
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map