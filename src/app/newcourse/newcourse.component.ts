import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DetailsModel } from '../home/home.model';
import { StudentService } from '../student.service';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {

  constructor(private fb:FormBuilder,private studentService:StudentService, private router:Router, private observer: BreakpointObserver,public _auth:AuthService){}
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  detialsItem= new DetailsModel(null,null,null,null,null,null)
  title:String = "Add New Course"
images:any
filename:String
url: any = undefined;
  courses:string
  coursesdata! : DetailsModel[];
  cdetails:string
 cimage:string
 cimageurl:string
 ccourseId:string
 editon:boolean = false;
 editoncourse:boolean = false;
updateoncourse:boolean = false;
 addcourse
 updatecourse
 confirmsave:boolean = false
 courseContent: string
  detailContent: string
  ucourseContent: string
  udetailContent: string
 detailsItem= {
   id:'',
   courseId:'',
   course :'',
   coursename:'',
   details:'',
   image:'',
    imageurl:''}
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
  this.studentService.getCourse()
  .subscribe((data)=>{
this.coursesdata= JSON.parse(JSON.stringify(data));
//console.log(this.coursesdata);
  })
 
 }
 
 editing(){
this.editon = !this.editon
this.addcourse= this.fb.group({
  'course':['',[Validators.required]],
  'details':['',[Validators.required]],
  'courseId':['',[Validators.required]],
  'image':['',[Validators.required]]
})
this.url=undefined;
 }
 editingcourse(coursesdata:any){
  this.editoncourse = !this.editoncourse
  localStorage.setItem('editcourseId',coursesdata._id.toString());
  let eachcourseId = localStorage.getItem("editcourseId");
      this.studentService.geteachCourse(eachcourseId).subscribe((data)=>{
        this.detialsItem=JSON.parse(JSON.stringify(data));
        this.url=this.detialsItem.imageurl
    //console.log(this.detailsItem )
    this.updatecourse= this.fb.group({
      'course':[ this.detialsItem.course,[Validators.required]],
      'details':[ this.detialsItem.details,[Validators.required]],
      'courseId':[this.detialsItem.courseId,[Validators.required]],
      'image':['',[Validators.required]]
    })
})
this.updatecourse= this.fb.group({
  'course':[ '',[Validators.required]],
  'details':[ '',[Validators.required]],
  'courseId':['',[Validators.required]],
  'image':['',[Validators.required]]
})
this.url=undefined;
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

 addnewCourse(){
  this.courses= this.addcourse.get('course').value;
  this.cdetails= this.addcourse.get('details').value;
  this.ccourseId= this.addcourse.get('courseId').value;
  this.cimage= this.images.name;
  this.courseContent=this.addcourse.get('course').value;
  this.detailContent=this.addcourse.get('details').value;
   this.detialsItem.coursename=this.courses.replace(/<[^>]*>/g, '');
   //this.detialsItem.details=this.cdetails.replace(/<[^>]*>/g, '');
   this.detialsItem.course=this.courses
   this.detialsItem.details=this.cdetails
   this.detialsItem.image=this.cimage;
   this.detialsItem.imageurl=this.url;
   this.detialsItem.courseId=this.ccourseId;
this.studentService.newCourse(this.detialsItem);
console.log("called");
this.confirmsave = !this.confirmsave
alert("Course added sucessfully. Please save to continue");
//this.router.navigate(['/']);
  }
  savedata(){
    this.studentService.getCourse()
  .subscribe((data)=>{
this.coursesdata= JSON.parse(JSON.stringify(data));
//console.log(this.coursesdata);
  })
  this.editon = !this.editon
  this.confirmsave = !this.confirmsave
  }
  editCourse(){
     let eachcourseId = localStorage.getItem("editcourseId");
   this.detailsItem.course=this.updatecourse.get('course').value;
     this.detailsItem.details=this.updatecourse.get('details').value;
  this.detailsItem.image=this.images.name;
     this.detailsItem.imageurl=this.url;
   this.detailsItem.id=eachcourseId;
  this.courses= this.updatecourse.get('course').value;
    this.detailsItem.coursename=this.courses.replace(/<[^>]*>/g, '');
     this.detailsItem.courseId=this.updatecourse.get('courseId').value;
    this.ucourseContent=this.updatecourse.get('course').value;
   this.udetailContent=this.updatecourse.get('details').value;
 
      this.studentService.editCoursen(this.detailsItem); 
      this.updateoncourse = !this.updateoncourse  
      alert("Success please save to continue");

  }
 updatedata(){
    this.studentService.getCourse()
  .subscribe((data)=>{
this.coursesdata= JSON.parse(JSON.stringify(data));
//console.log(this.coursesdata);
  })
  this.editoncourse = !this.editoncourse
  this.updateoncourse = !this.updateoncourse  
  }
  delete(coursesdata:any){
    localStorage.setItem('editcourseId',coursesdata._id.toString());
  let eachcourseId = localStorage.getItem("editcourseId");
    this.studentService.deleteCourse(eachcourseId)
    .subscribe((data) => {
      this.coursesdata = this.coursesdata.filter(DetailsModel => DetailsModel !== coursesdata);
    })
    alert("Delete success")
  }
  viewCourse(coursesdata:any){
    localStorage.setItem('editcourseId',coursesdata._id.toString());
 this.router.navigate(['eachcourse'])
  }
}
