import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmedstudentdata',
  templateUrl: './confirmedstudentdata.component.html',
  styleUrls: ['./confirmedstudentdata.component.css']
})
export class ConfirmedstudentdataComponent implements OnInit {

  constructor(private observer: BreakpointObserver, private studentService:StudentService, private router:Router) { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  newstudentsItem={
    fullname:'',
    email:'',
    phone:'',
    address:'',
    place:'',
    qualification:'',
    passout:'',
    skill:'',
    empstatus:'',
   techtrain:'',
    year:'',
    course:'',
    studcardnumber:'',
    studcsc:'',
    studid:'',
    photo:'',
    photourl:'',
    confstatus:''
  }
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
let studentId = localStorage.getItem("studentdata");
this.studentService.getnewStudent(studentId).subscribe((data)=>{
  this.newstudentsItem=JSON.parse(JSON.stringify(data));
})
  }
  deletestudent(student){
    let studentId = localStorage.getItem("studentdata");
    this.studentService.deletestudenroll(studentId)
    .subscribe((data) => {
    console.log(data)});
     this.router.navigate(['admdashboard'])
  }
}
