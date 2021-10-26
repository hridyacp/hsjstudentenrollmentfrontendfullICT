import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empconfirmedstudentdata',
  templateUrl: './empconfirmedstudentdata.component.html',
  styleUrls: ['./empconfirmedstudentdata.component.css']
})
export class EmpconfirmedstudentdataComponent implements OnInit {

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

}
