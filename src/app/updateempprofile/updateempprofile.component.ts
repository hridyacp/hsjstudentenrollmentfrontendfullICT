import { Component, OnInit } from '@angular/core';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updateempprofile',
  templateUrl: './updateempprofile.component.html',
  styleUrls: ['./updateempprofile.component.css']
})
export class UpdateempprofileComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  empformItem = new EmpenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null);
  images:any
filename:string
error:any
error1:any
url: any = undefined;
newemployeesItem={
  fullname:'',
  email:'',
  phone:'',
  address:'',
  qualification:'',
  skill:'',
  empstatus:'',
 techtrain:'',
  year:'',
  photo:'',
  photourl:'',
  confstatus:''
}
  ngOnInit(): void {
    let email = localStorage.getItem("logedddmail");
    console.log(email)
this.studentService.getEmployeeprofile(email).subscribe((data)=>{
  this.newemployeesItem=JSON.parse(JSON.stringify(data));})
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
    editprofile(){ 
      this.newemployeesItem.photourl=this.url;
    this.newemployeesItem.photo=this.filename;
      this.studentService.editempprofile(this.newemployeesItem)
      .subscribe(
        (res)=>{
          localStorage.setItem('logedddmail',this.newemployeesItem.email) ;  
      alert("Updated Successfully");
      this.router.navigate(['employeedashboard']);
    }
    ,(user)=>{
      if(user.emailerror="emailerror"){
        this.error="Email already exists. Please use another email id";
      }
      else{
        localStorage.setItem('logedddmail',this.newemployeesItem.email) ;  
        alert("Updated Successfully");
        this.router.navigate(['employeedashboard']);
      }
    })
}
}
