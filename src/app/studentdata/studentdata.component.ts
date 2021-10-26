import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdata',
  templateUrl: './studentdata.component.html',
  styleUrls: ['./studentdata.component.css']
})
export class StudentdataComponent implements OnInit {
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
    studedate:'',
    studcsc:'',
    studid:'',
    photo:'',
    photourl:'',
    confstatus:''
  }
  signupItem={
    confstatus:''
  }
  constructor(private studentService:StudentService, private router:Router) { }

  ngOnInit(): void {
    let studentId = localStorage.getItem("apprstudentId");
    this.studentService.getnewStudent(studentId).subscribe((data)=>{
      this.newstudentsItem=JSON.parse(JSON.stringify(data));
     
  })
  }
  confirmStudent(){  
    this.newstudentsItem.confstatus="confirm"
    this.signupItem.confstatus="confirm"
    this.studentService.confrimnewStudent(this.newstudentsItem);   
    console.log(this.newstudentsItem);
    localStorage.removeItem('apprstudentId')
    alert("confimred");
  this.router.navigate(['/admdashboard'])
  }
  denyStudent(){
    let studentId = localStorage.getItem("apprstudentId");
    this.studentService.deniedStudent(studentId)
    .subscribe((data) => {
      console.log(data);
    })
    localStorage.removeItem('apprstudentId')
    alert("denied");
  this.router.navigate(['/admdashboard'])
  }
}
