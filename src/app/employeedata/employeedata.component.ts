import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
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
  signupItem={
    confstatus:''
  }
  ngOnInit(): void {
    let employeeId = localStorage.getItem("appremployeeId");
    this.studentService.getnewEmployee(employeeId).subscribe((data)=>{
      this.newemployeesItem=JSON.parse(JSON.stringify(data));
     
  })
    
  }
  confirmEmployee(){  
    this.newemployeesItem.confstatus="confirm"
    this.signupItem.confstatus="confirm"
    this.studentService.confrimnewEmployee(this.newemployeesItem);   
    console.log(this.newemployeesItem);
    localStorage.removeItem('appremployeeId')
    alert("confimred");
  this.router.navigate(['/admdashboard'])
  }
  denyEmployee(){
    let employeeId = localStorage.getItem("appremployeeId");
    this.studentService.deniedEmployee(employeeId)  
    .subscribe((data) => {
      console.log(data);
    })
    localStorage.removeItem('appremployeeId')
    alert("denied");
  this.router.navigate(['/admdashboard'])
  }
}
