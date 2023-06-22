
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  employees: any;

  constructor(private data: EmployeeService, private http: HttpClient){ 
    this.http.get("http://localhost:5000/getAll").subscribe(res=> this.employees = res );
   }

  deleteEmployee(emp: any){
    this.data.deleteEmployee(emp);
    this.employees = this.data.getData();
  }
}

