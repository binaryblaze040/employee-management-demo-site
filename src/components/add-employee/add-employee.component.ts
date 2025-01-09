import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee, Roles } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  newEmployee: FormGroup;

  constructor(private employeeService: EmployeeService) {
    this.newEmployee = new FormGroup(
      {
        employeeId: new FormControl(''),
        name: new FormControl(''),
        role: new FormControl('Select role'),
        startDate: new FormControl(''),
        endDate: new FormControl(''),
      });
  }

  saveEmployeeDetails(): void {
    let formValues = this.newEmployee.value;
    let employeeDetails: Employee = {
      employeeId: '_' + Math.random().toString(36).substring(2, 9),
      name: formValues.name,
      role: formValues.role,
      startDate: formValues.startDate,
      endDate: formValues.endDate
    }
    this.employeeService.addEmployee(employeeDetails);
  }
}
