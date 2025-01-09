import { Component, OnInit, signal } from '@angular/core';
import { Employee, Roles } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  allEmployees: Employee[] = [];

  currentEmployees: Employee[] = [];
  pastEmployees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  filterEmployees(): void {
    this.currentEmployees = [];
    this.pastEmployees = [];

    this.allEmployees.forEach((employee) => {
      const currentDate = new Date();
      if(employee.endDate) {
        const endDate = new Date(employee.endDate);
        if(endDate < currentDate) {
          this.pastEmployees.push(employee)
        }
      }
      else {
        this.currentEmployees.push(employee);
      }
    });
  }

  ngOnInit() {
    this.allEmployees = this.employeeService.allEmployees;
    this.filterEmployees();
  }

  editEmployee(employee: Employee) {
    this.employeeService.editEmployee(employee);
  }

  deleteEmployee(employee: Employee) {
    this.allEmployees = this.allEmployees.filter(currentEmployee => currentEmployee !== employee);
    this.filterEmployees();
    this.employeeService.deleteEmployee(employee);
  }
}
