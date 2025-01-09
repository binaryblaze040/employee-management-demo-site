import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  headerText: string;

  defaultHeader: string = "Employee List";

  constructor(private router: Router, private employeeService: EmployeeService) {
    this.headerText = this.defaultHeader;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        const navEndEvent = event as NavigationEnd;

        switch (navEndEvent.urlAfterRedirects) {
          case '/add-employee':
            this.headerText = "Add Employee Details"
            break;
          case '/edit-employee':
            this.headerText = "Edit Employee Details"
            break;
          default:
            this.headerText = this.defaultHeader;
        }
      });
  }

}
