import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudenrollformModel } from '../studenrollform/studenrollform.model';
import { StudentService } from '../student.service';
import{FilterSettingsModel} from '@syncfusion/ej2-angular-grids';
import {CommandModel,CommandClickEventArgs,GridComponent,Column,IRow,EditSettingsModel} from '@syncfusion/ej2-angular-grids';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-empsearchstudents',
  template: `<br> <br> <br> <br><ejs-grid #grid [dataSource]='students' [filterSettings]='filterOptions' [allowFiltering]='true' [editSettings]='editSettings' (commandClick)='commandClick($event)'>
  <e-columns>
  <e-column field='fullname' headerText='Name' textAlgin='center' width='150'></e-column>
  <e-column field='email' headerText='Email' textAlgin='center' width='150'></e-column>
  <e-column field='phone' headerText='Phone' textAlgin='center' width='150'></e-column>
  <e-column field='address' headerText='Address' textAlgin='center' width='150'></e-column>
  <e-column field='place' headerText='Place' textAlgin='center' width='150'></e-column>
  <e-column field='qualification' headerText='Qualification' textAlgin='center' width='150'></e-column>
  <e-column field='passout' headerText='Passout Year'  textAlgin='center' width='120'></e-column>
  <e-column field='skill' headerText='Skills'  textAlgin='center' width='150'></e-column>
  <e-column field='empstatus' headerText='EmploymentStatus' textAlgin='center' width='150'></e-column>
  <e-column field='techtrain' headerText='Technical training' textAlgin='center' width='150'></e-column>
  <e-column field='year' headerText='Year' textAlgin='center' width='120'></e-column>
  <e-column field='course' headerText='Course' textAlgin='center' width='180'></e-column>
  <e-column field='studcardnumber' headerText='Fees' textAlgin='center' width='120'></e-column>
  <e-column field='studcsc' headerText='Fee Status' textAlgin='center' width='120'></e-column>
  <e-column headerText='Photo' textAlgin='center' width='180'><ng-template #template let-students>
  <img with=50 height=50 src={{students.photourl}}>
  </ng-template> </e-column>
  <e-column headerText='View' [commands]='commands'  width='150'></e-column>
  </e-columns>
  </ejs-grid>`,
  // templateUrl: './empsearchstudents.component.html',
  styleUrls: ['./empsearchstudents.component.css']
})
export class EmpsearchstudentsComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  public editSettings:EditSettingsModel[];
  public commands:CommandModel[];
  students!:StudenrollformModel[];
  public filterOptions:FilterSettingsModel={
    ignoreAccent:true,
    type:'Excel'
  }
  ngOnInit(): void {
    this.studentService.getStudent()
    .subscribe((data)=>{
  this.students= JSON.parse(JSON.stringify(data));
  })
  this.commands=[{buttonOption: {content:'View',cssClass:'e-flat'}}]
  }
  commandClick(args:CommandClickEventArgs):void{ 
    let id=JSON.parse(JSON.stringify(args.rowData))._id
  localStorage.setItem('studentdata',id)
   this.router.navigate(['empconfirmedstudentdata'])
  }
}
