import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee, Roles } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employeeToEdit: Employee;

  editedDetails: FormGroup;

  constructor(private employeeService: EmployeeService) {
    this.employeeToEdit = {
      employeeId: "",
      name: "",
      role: Roles.FD,
      startDate: "",
      endDate: ""
    };

    this.editedDetails = new FormGroup({
      employeeId: new FormControl(''),
      name: new FormControl(''),
      role: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if(this.employeeService.employeeToEdit) {
      this.employeeToEdit = this.employeeService.employeeToEdit;


      let roleString = this.employeeToEdit.role.toString().split(' ');

      let currentRole = roleString[0].charAt(0) + roleString[1].charAt(0);
      this.editedDetails = new FormGroup({
        employeeId: new FormControl(this.employeeToEdit.employeeId),
        name: new FormControl(this.employeeToEdit.name),
        role: new FormControl(currentRole),
        startDate: new FormControl(this.employeeToEdit.startDate),
        endDate: new FormControl(this.employeeToEdit.endDate),
      });
    }
  }

  saveEmployeeDetails(): void {
    let formValues = this.editedDetails.value;

    let employeeDetails: Employee = {
      employeeId: this.employeeToEdit.employeeId,
      name: formValues.name,
      role: formValues.role,
      startDate: formValues.startDate,
      endDate: formValues.endDate,
    };
    this.employeeService.saveNewDetails(employeeDetails);
  }
}
