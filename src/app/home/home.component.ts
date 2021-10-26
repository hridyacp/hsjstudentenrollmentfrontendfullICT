import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { DetailsModel } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses! : DetailsModel[];
  studentcounts={
    confstudents:0
  }
  studentcount:number=0;
employeecounts={
  confemployees:0
      }
  constructor(private router:Router, private studentService:StudentService) { }

  ngOnInit(): void {
    this.studentService.getCourse()
    .subscribe((data)=>{
this.courses= JSON.parse(JSON.stringify(data));
console.log(this.courses);
    })
    this.studentService.getStudentcount()
    .subscribe((data)=>{
    this.studentcounts=JSON.parse(JSON.stringify(data));
   console.log(this.studentcounts.confstudents) 
    })
    this.studentService. getEmployeecount()
    .subscribe((data)=>{
    this.employeecounts=JSON.parse(JSON.stringify(data));
   console.log(this.employeecounts.confemployees) 
    })
  }
  editText(){
    this.router.navigate(['/editcourse'])
      }
      register(){
        this.router.navigate(['/signup'])
      }
      //  accuratecountstop:any = setInterval(()=>{
      //   this.studentcount++;
      //       if(this.studentcount == this.studentcounts.confstudents)
      //       { 
      //        clearInterval(this.accuratecountstop);
      //       }
      //     },10)
}
