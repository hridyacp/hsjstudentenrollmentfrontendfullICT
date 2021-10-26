import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { EmpenrollformModel } from './empenrollform.model';

@Component({
  selector: 'app-empenrollform',
  templateUrl: './empenrollform.component.html',
  styleUrls: ['./empenrollform.component.css']
})
export class EmpenrollformComponent implements OnInit {
 
  constructor(private studentService:StudentService, private router:Router) { }
  empformItem = new EmpenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null)
  images:any
filename:String
error:any
error1:any
url: any = undefined;
ngOnInit(): void {
}
  submitImage(event:any){
    this.images=event.target.files[0]
    this.filename = this.images.name;
    const reader = new FileReader();
    reader.readAsDataURL(this.images);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
}
  userVerify()
  {
    this.empformItem.empid="";
  this.empformItem.confstatus="pending";
  this.empformItem.photourl=this.url;
  this.empformItem.photo=this.filename;
  let logedemail = localStorage.getItem("logemail");
  console.log(logedemail)
  if(logedemail==this.empformItem.email){
    localStorage.removeItem('logemail');
    this.studentService.enrollEmp(this.empformItem)
    .subscribe(
      (res)=>{ 
        alert("Enrollement form submitted. Enrollment will be confirmed via email");
    localStorage.removeItem('empnewrole')
  this.router.navigate(['/']);
  
  }
  ,(err)=>{
    this.error1="You have already enrolled. Please wait for a confirmation mail"
  })
  }
    else{
      this.error="Please use the email used for login";
    }
    
}
}
