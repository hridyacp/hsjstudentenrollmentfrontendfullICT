import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { Router } from '@angular/router';
import { StudenrollformComponent } from '../studenrollform/studenrollform.component';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public _auth:AuthService, private studentService:StudentService, private router:Router) { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 newemployees! : EmpenrollformModel[];
 newstudents! : StudenrollformModel[];
  newemployeeItem={
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
  ngOnInit(): void {  this.observer
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
  }
  newnotificationemp(){
    this.studentService.notificationemp()
    .subscribe((data)=>{
      this.newemployees= JSON.parse(JSON.stringify(data));
      console.log(this.newemployees);
    })
  }
  newnotificationstud(){
    this.studentService.notificationstud()
    .subscribe((data)=>{
      this.newstudents= JSON.parse(JSON.stringify(data));
      console.log(this.newstudents);
    })
  }
  newemployee(employee:any){
    localStorage.setItem('appremployeeId',employee._id.toString());
    this.router.navigate(['employeedata'])
  }
  newstudent(student:any){
    localStorage.setItem('apprstudentId',student._id.toString());
    this.router.navigate(['studentdata'])
  }
}
