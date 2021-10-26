import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admemployee',
  templateUrl: './admemployee.component.html',
  styleUrls: ['./admemployee.component.css']
})
export class AdmemployeeComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  employees! : EmpenrollformModel[];
  ngOnInit(): void {
    this.studentService.getEmployee()
    .subscribe((data)=>{
  this.employees= JSON.parse(JSON.stringify(data));
  console.log(this.employees);
  })
}
viewemployee(employee){
  localStorage.setItem('employeedata',employee._id.toString())
this.router.navigate(['confirmedemployeedata'])
}
}
