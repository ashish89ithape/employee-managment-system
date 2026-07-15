import { Employee } from "./Employee";

export abstract class Department{
    constructor(public name: string){}
    abstract getEmployees() :Employee[];
}

export class HRDepartment extends Department {
    private employees: Employee[] =[];

    addEmployee(emp: Employee) {
        this.employees.push(emp);
    }

    getEmployees(): Employee[] {
        return this.employees;
    }
}
