import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, Roles } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allEmployees: Employee[] = [];

  // allEmployees: Employee[] = [
  //   {
  //     employeeId: "7865",
  //     name: "Himanshu",
  //     role: Roles.FD,
  //     startDate: "2024-12-12",
  //     endDate: "2025-01-01"
  //   },
  //   {
  //     employeeId: "6754",
  //     name: "Sabri",
  //     role: Roles.QT,
  //     startDate: "2024-10-15",
  //     endDate: "2024-11-20"
  //   },
  //   {
  //     employeeId: "2876",
  //     name: "Mohan",
  //     role: Roles.PO,
  //     startDate: "2024-10-15"
  //   },
  //   {
  //     employeeId: "2134",
  //     name: "Dharma",
  //     role: Roles.PD,
  //     startDate: "2024-10-15"
  //   }
  // ];

  employeeToEdit?: Employee;

  constructor(private router: Router) { }

  addEmployee(employee: Employee): void {
    this.allEmployees.push(employee);

    this.router.navigate(['/']);
  }

  editEmployee(employee: Employee): void {
    this.employeeToEdit = employee;
    this.router.navigate(['/edit-employee']);
  }

  saveNewDetails(employee: Employee) {
    this.allEmployees = this.allEmployees.map(currEmpl => {
      if (currEmpl.employeeId === employee.employeeId) {
        return employee;
      } else {
        return currEmpl;
      }
    });

    this.router.navigate(['/']);
  }

  deleteEmployee(employee?: Employee): void {
    if(employee) {
      this.allEmployees.filter(currentEmployee => currentEmployee.employeeId !== employee.employeeId);
    }
  }
}
