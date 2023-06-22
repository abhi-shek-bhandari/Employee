import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _http:HttpClient;
  data:any;
  constructor(_http:HttpClient){
      this._http = _http;
      this._http.get("http://localhost:5000/getAll").subscribe(res=> this.data = res );
  }

  deleteEmployee(employee: any){
      console.log(employee);
      this._http.delete(`http://localhost:5000/deleteEmployee/${employee.employeeId}`).subscribe({
        next: data => {
            console.log('Delete successful');
            const index = this.data.indexOf(employee);
            this.data.splice(index,1);
        },
        error: error => {
            console.error('There was an error!', error);
        }
      });
  }

  employeeAdd(emp: any){
      console.log(emp);
      this._http.post("http://localhost:5000/add",emp).subscribe({
        next: res => {
          this.data.push(res);
        },
        error: error => {
        console.error('Error making POST request:', error);
        // Handle any errors that occurred during the request
        }
      })
    }

  getData():any{
      return this.data;
  }
}