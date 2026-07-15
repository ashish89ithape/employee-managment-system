"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
const Employee_1 = require("../models/Employee");
const Status_1 = require("../types/Status");
exports.employees = [
    new Employee_1.Employee(1, "Ashish", "Admin", Status_1.Status.Active, 30),
    new Employee_1.Employee(2, "Priya", "Manager", Status_1.Status.Inactive, 28),
];
//# sourceMappingURL=employees.js.map