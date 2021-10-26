import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EmployeeCourseModel } from '../eachcourse/employeecourse.model';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {

  constructor(private observer: BreakpointObserver,private studentService:StudentService, private router:Router) { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  dispemployeeval! : EmployeeCourseModel[];
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
  ngOnInit(): void {
  
    let empemail = localStorage.getItem("logedddmail");
    console.log(empemail)
    this.studentService.getEmployeeprofile(empemail).subscribe((data)=>{
      this.newemployeesItem=JSON.parse(JSON.stringify(data));
      this.studentService.dispCourseempprof(empemail)
   .subscribe((data)=>{
  this.dispemployeeval= JSON.parse(JSON.stringify(data));
  console.log(this.dispemployeeval);
    })
        })
  }
editemploy(employeedata){
  this.router.navigate(['updateempprofile'])
}
}
