"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    constructor(id, name, role, status, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.status = status;
    }
    getDetails() {
        return `${this.name}, (${this.role}) - ${this.status}`;
    }
}
exports.Employee = Employee;
Employee.companyName = 'Neo';
//# sourceMappingURL=Employee.js.map