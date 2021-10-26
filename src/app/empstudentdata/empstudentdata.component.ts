import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-empstudentdata',
  templateUrl: './empstudentdata.component.html',
  styleUrls: ['./empstudentdata.component.css']
})
export class EmpstudentdataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  students!:StudenrollformModel[];
  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe((data)=>{
  this.students= JSON.parse(JSON.stringify(data));
  console.log(this.students);
  })
  }
  viewstudent(student){
    localStorage.setItem('studentdata',student._id.toString())
  this.router.navigate(['empconfirmedstudentdata'])
}
}
