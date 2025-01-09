import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { EmployeeListComponent } from '../components/employee-list/employee-list.component';
import { AddEmployeeComponent } from '../components/add-employee/add-employee.component';
import { EditEmployeeComponent } from '../components/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
