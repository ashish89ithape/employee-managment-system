"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HRDepartment = exports.Department = void 0;
class Department {
    constructor(name) {
        this.name = name;
    }
}
exports.Department = Department;
class HRDepartment extends Department {
    constructor() {
        super(...arguments);
        this.employees = [];
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    getEmployees() {
        return this.employees;
    }
}
exports.HRDepartment = HRDepartment;
//# sourceMappingURL=Department.js.map