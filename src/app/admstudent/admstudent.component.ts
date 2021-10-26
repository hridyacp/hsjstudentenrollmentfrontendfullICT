import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admstudent',
  templateUrl: './admstudent.component.html',
  styleUrls: ['./admstudent.component.css']
})
export class AdmstudentComponent implements OnInit {

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
  this.router.navigate(['confirmedstudentdata'])
}
}
