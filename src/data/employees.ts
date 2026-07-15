import { Employee } from "../models/Employee";
import { Status } from "../types/Status";
export const employees: Employee[] = [
    new Employee(1,"Ashish", "Admin",Status.Active, 30),
    new Employee(2, "Priya", "Manager", Status.Inactive, 28),
]
