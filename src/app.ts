import { EmployeeService } from "./services/EmployeeService";
import { employees } from "./data/employees";
import { Employee } from "./models/Employee";
import { Status } from "./types/Status";
import { Role } from "./types/Role";

const service = new EmployeeService();
const form = document.getElementById("employee-form") as HTMLFormElement;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name= (document.getElementById("name") as HTMLInputElement).value;
    const age =parseInt((document.getElementById("age") as HTMLInputElement).value);
    const role =(document.getElementById("role") as HTMLSelectElement).value as Role;

    const newEmp= new Employee(Date.now(), name, role, Status.Active, age);
    service.addEmployee(newEmp);
    renderEmployee();
})

const list = document.getElementById('employee-list')!;

function renderEmployee(){
 service.fetchEmployees().then((res)=> {
    list.innerHTML ="";
    res.data.forEach((emp)=>{
        const card =document.createElement("div");
        card.className="employee-card";
        card.innerHTML=`
        <h3>${emp.name}</h3>
        <p>Role: ${emp.role}</p>
        <p>Age: ${emp.age}</p>
        <p>Status: ${emp.status}</p>
        <button class="delete-btn" data-id="${emp.id}">Delete</button>
        `;
        list.appendChild(card);

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt((e.target as HTMLButtonElement).dataset.id!);
                service.removeEmployee(id);
                renderEmployee(); // refresh list
            });
        });
    });
 });
}

renderEmployee();
