import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-updatestudentdata',
  templateUrl: './updatestudentdata.component.html',
  styleUrls: ['./updatestudentdata.component.css']
})
export class UpdatestudentdataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  studformItem = new StudenrollformModel(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null, null, null);
  images:any
  filename:string
  error:any
  error1:any
   url: any = undefined;
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
    let studemail=localStorage.getItem('logeddmail');
    this.studentService.geteachStudent(studemail).subscribe((data)=>{
      this.newstudentsItem=JSON.parse(JSON.stringify(data));
      console.log(this.newstudentsItem)
    })
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
  updatestuden(){
    this.newstudentsItem.photourl=this.url;
    this.newstudentsItem.photo=this.filename;
    this.studentService.editStudent(this.newstudentsItem) 
    .subscribe(
      (res)=>{
        localStorage.setItem('logeddmail', this.newstudentsItem.email)  
    alert("Updated Successfully");
    this.router.navigate(['studentprofile']);
      }
      ,(user)=>{
        if(user.emailerrors="emailerrors"){
          this.error="Email already exists. Please use another email id";
        }
        else{
          localStorage.setItem('logeddmail', this.newstudentsItem.email)
    alert("Updated Successfully");
    this.router.navigate(['studentprofile']);
        }
      })
  }
}
