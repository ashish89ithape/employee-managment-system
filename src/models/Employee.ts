import { Person } from "../interfaces/Person";
import { Role } from "../types/Role";
import { Status } from "../types/Status";

export class Employee implements Person {
    readonly id: number;
    name: string;
    age?:number;
    role:Role;
    status:Status;

    static companyName: string ='Neo';
    constructor(id: number,name: string,role: Role,status: Status,age?: number){
        this.id=id;
        this.name=name;
        this.age=age;
        this.role=role;
        this.status=status;
    }

    getDetails(): string {
        return `${this.name}, (${this.role}) - ${this.status}`;
    }
}