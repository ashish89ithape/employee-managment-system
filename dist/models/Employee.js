export class Employee {
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
Employee.companyName = 'Neo';
