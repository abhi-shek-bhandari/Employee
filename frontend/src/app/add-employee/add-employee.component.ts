import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  formData: any = {};

  constructor(private data: EmployeeService) { }

  onSubmit(){
    this.data.employeeAdd(this.formData);
  }
}
