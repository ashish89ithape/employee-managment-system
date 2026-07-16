export class Department {
    constructor(name) {
        this.name = name;
    }
}
export class HRDepartment extends Department {
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
