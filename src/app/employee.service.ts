import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: any = [];

  constructor() { }

  setEmployees(arr){

    this.employees = arr;

  }

  getEmployess():any{

    return this.employees;

  }

  getEmploye(id: number):any{

    return this.employees.find(e => e.empId === id)

  }

<<<<<<< HEAD
=======
  delEmploye(): void{

    


  }

>>>>>>> 81b3d5e (Projakt-IT255-V01)
}
