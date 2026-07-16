import { EmployeeService } from "./services/EmployeeService";
import { Employee } from "./models/Employee";
import { Status } from "./types/Status";
const service = new EmployeeService();
//employees.forEach(emp => service.addEmployee(emp));
const form = document.getElementById("employee-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const role = document.getElementById("role").value;
    const newEmp = new Employee(Date.now(), name, role, Status.Active, age);
    service.addEmployee(newEmp);
    renderEmployee();
});
const list = document.getElementById('employee-list');
function renderEmployee() {
    service.fetchEmployees().then((res) => {
        list.innerHTML = "";
        res.data.forEach((emp) => {
            const card = document.createElement("div");
            card.className = "employee-card";
            card.innerHTML = `
        <h3>${emp.name}</h3>
        <p>Role: ${emp.role}</p>
        <p>Age: ${emp.age}</p>
        <p>Status: ${emp.status}</p>
        <button class="delete-btn" data-id="${emp.id}">Delete</button>
        `;
            list.appendChild(card);
            document.querySelectorAll(".delete-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = parseInt(e.target.dataset.id);
                    service.removeEmployee(id);
                    renderEmployee(); // refresh list
                });
            });
        });
    });
}
// list.addEventListener("click", (e) => {
//     const target = e.target as HTMLElement;
//     if (target.classList.contains("delete-btn")) {
//         const id = Number(target.dataset.id);
//         console.log("Deleting:", id);
//         service.removeEmployee(id);
//         renderEmployee();
//     }
// });
renderEmployee();
//# sourceMappingURL=app.js.map