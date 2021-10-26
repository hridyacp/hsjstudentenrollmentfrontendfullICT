import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsModel } from '../home/home.model';
import { StudentService } from '../student.service';
import { StudenrollformModel } from './studenrollform.model';

@Component({
  selector: 'app-studenrollform',
  templateUrl: './studenrollform.component.html',
  styleUrls: ['./studenrollform.component.css']
})
export class StudenrollformComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  studformItem = new StudenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, null, null);
  images:any
filename:String
error:any
error1:any
 url: any = undefined;
 handler:any = null;
 coursesdata! : DetailsModel[];
  ngOnInit(): void {
    this.studentService.getCourse()
    .subscribe((data)=>{
  this.coursesdata= JSON.parse(JSON.stringify(data));
    })
  //console.log(this.coursesdata);
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
 
  
  
  userVerify(){
    //this.studformItem.studid=this.coursesdata.courseId;
    this.studformItem.studid="";
    this.studformItem.confstatus="pending";
    this.studformItem.photourl=this.url;
    this.studformItem.photo=this.filename;
    this.studformItem.studcsc="pending";
    let logedemail = localStorage.getItem("logemail");
  console.log(logedemail)
 
  if(logedemail==this.studformItem.email){
    this.studentService.enrollStud(this.studformItem)
    .subscribe(
      (res)=>{
    alert("Enrollement form submitted. Please pay the fees.");
    this.router.navigate(['feepayment']);
  }
  ,(err)=>{
    this.error1="You have already enrolled. Please wait for a confirmation mail."
  })
  }
    else{
      this.error="Please use the email used for login";
    }
    
  }
  
}
