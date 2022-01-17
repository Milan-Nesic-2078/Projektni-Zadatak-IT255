import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

<<<<<<< HEAD

=======
>>>>>>> 81b3d5e (Projakt-IT255-V01)
@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent implements OnInit {


  images: string = "assets/icons/images.png";

  searchStr: string;

  emplArr: any = [];

  num: number = 1;

<<<<<<< HEAD
=======
  emp: any;

>>>>>>> 81b3d5e (Projakt-IT255-V01)

  constructor(private _emplService: EmployeeService, private _router: Router) {

  }



  ngOnInit(): void {

    this.emplArr = this._emplService.getEmployess();

  }

  onclick(reff: any) {

<<<<<<< HEAD
    delete this.emplArr[reff.empId];
=======
    this.emp = this.emplArr.find(id => id.empId === reff.empId);

    delete this.emplArr[this.emp.empId];
>>>>>>> 81b3d5e (Projakt-IT255-V01)

  }


  emplInfo(empId: number) {

    this._router.navigate(["employeinfo", empId]);

  }

}

