import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsModel } from '../home/home.model';
import { SignupModel } from '../signup/SignUpModel';
import { StudentService } from '../student.service';
import { EmployeeCourseModel } from './employeecourse.model';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';


@Component({
  selector: 'app-eachcourse',
  templateUrl: './eachcourse.component.html',
  styleUrls: ['./eachcourse.component.css']
})
export class EachcourseComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private studentService:StudentService, private observer: BreakpointObserver, private router:Router) { }
  employees! : EmpenrollformModel[];
  dispemployeeval! : EmployeeCourseModel[];
  studentItem= new StudenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
  dispstudentval!: StudenrollformModel[];
  employeesItem= new EmployeeCourseModel(null,null)
  assignemployees: boolean = false;
  dispemployeess: boolean = false;
  dispstudentss: boolean = false;
  content:boolean =false;
  error:any
  detailsItem= {
    id:'',
    courseId:'',
    course :'',
    coursename:'',
    details:'',
    image:'',
     imageurl:''}
     EmployeeItem={
coursename:'',
employeename:''
     }
  url: any = undefined;
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
    let eachcourseId = localStorage.getItem("editcourseId");
      this.studentService.geteachCourse(eachcourseId).subscribe((data)=>{
        this.detailsItem=JSON.parse(JSON.stringify(data));
        this.url=this.detailsItem.imageurl
        console.log(this.detailsItem)
  })
}
assignEmployees(){
  this.assignemployees = !this.assignemployees  
  this.studentService.getEmployee()
  .subscribe((data)=>{
this.employees= JSON.parse(JSON.stringify(data));
console.log(this.employees);
  })
}
assgincourseemp(){
  this.employeesItem.coursename = this.detailsItem.coursename
  this.studentService.updateempCourse(this.employeesItem)
  .subscribe(
    (res)=>{   
  alert("Employee assigned Successfully");
  this.assignemployees = !this.assignemployees
  console.log(this.employeesItem)
    }
    ,(user)=>{
      this.error="Employee already assigned";
    })
 }
 dispEmployees(){
  let eachcourseId = localStorage.getItem("editcourseId");
  this.dispemployeess = !this.dispemployeess
  this.studentService.dispEmployee(eachcourseId)
  .subscribe((data)=>{
this.dispemployeeval= JSON.parse(JSON.stringify(data));
console.log(this.dispemployeeval);
  })
 }
 deleteemployeeCourse(employeesItem){
  localStorage.setItem('assignedemployee',employeesItem._id.toString());
  this.studentService.deleteempcourse(employeesItem._id)
  .subscribe((data) => {
    this.dispemployeeval = this.dispemployeeval.filter(EmployeeCourseModel => EmployeeCourseModel !== employeesItem);
  })
 }
dispStudents(){
  this.dispstudentss = !this.dispstudentss
  let eachcourseId = localStorage.getItem("editcourseId");
  this.studentService.dispStudent(eachcourseId)
  .subscribe((data)=>{
this.dispstudentval= JSON.parse(JSON.stringify(data));
  })
}
deletestudentcourse(studentItem){
  localStorage.setItem('studentdatacourse',studentItem._id.toString())
  let studentId = localStorage.getItem("studentdatacourse");
  this.studentService.deletestudenroll(studentId)
  .subscribe((data) => {
    this.dispstudentval = this.dispstudentval.filter(StudenrollformModel => StudenrollformModel !== this.studentItem);
  })
  alert("Student deleted Successfully");
 
}
}
