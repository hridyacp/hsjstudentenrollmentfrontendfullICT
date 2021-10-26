import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StudentService } from '../student.service';
import { EmployeeCourseModel } from '../eachcourse/employeecourse.model';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmedemployeedata',
  templateUrl: './confirmedemployeedata.component.html',
  styleUrls: ['./confirmedemployeedata.component.css']
})
export class ConfirmedemployeedataComponent implements OnInit {

  constructor(private observer: BreakpointObserver, private studentService:StudentService, private router:Router) { }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  newemployeesItem={
    fullname:'',
    email:'',
    phone:'',
    address:'',
    qualification:'',
    skill:'',
    empstatus:'',
   techtrain:'',
    year:'',
    empid:'',
    photo:'',
    photourl:'',
    confstatus:''
  }
  dispemployeeval! : EmployeeCourseModel[];
  ngOnInit(): void {
    this.observer
    .observe(['(max-width: 800px)'])
    .pipe(delay(1))
    .subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
});
let employeeId = localStorage.getItem("employeedata");
this.studentService.getnewEmployee(employeeId).subscribe((data)=>{
  this.newemployeesItem=JSON.parse(JSON.stringify(data));
  let employeename=this.newemployeesItem.fullname
    this.studentService.dispCourseemp(employeeId)
   .subscribe((data)=>{
  this.dispemployeeval= JSON.parse(JSON.stringify(data));
  console.log(this.dispemployeeval);
    })
})
  }
  deleteemployee(dispemployeeval){
    let employeeId = localStorage.getItem("employeedata");
   this.studentService.deleteempenroll(employeeId)
   .subscribe((data) => {
   console.log(data)});
    this.router.navigate(['admdashboard'])
  }
}
