import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const routeConfig: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Employee'
  },
  {
    path: 'app-add-employee',
    component: AddEmployeeComponent,
    title: 'Add Employee'
  }
];

export default routeConfig;
