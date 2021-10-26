import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FilterSettingsModel} from '@syncfusion/ej2-angular-grids';
import {CommandModel,CommandClickEventArgs,GridComponent,Column,IRow,EditSettingsModel} from '@syncfusion/ej2-angular-grids';
import { EmpenrollformModel } from '../empenrollform/empenrollform.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-searchemployee',
  template: `<br><br><br><br><ejs-grid #grid [dataSource]='employees' [filterSettings]='filterOptions' [allowFiltering]='true' [editSettings]='editSettings' (commandClick)='commandClick($event)'>
  <e-columns>
  <e-column field='fullname' headerText='Name' textAlgin='center' width='150'></e-column>
  <e-column field='email' headerText='Email' textAlgin='center' width='150'></e-column>
  <e-column field='phone' headerText='Phone' textAlgin='center' width='150'></e-column>
  <e-column field='address' headerText='Adress' textAlgin='center' width='150'></e-column>
  <e-column field='qualification' headerText='Qualification' textAlgin='center' width='150'></e-column>
  <e-column field='skill' headerText='Skills'  textAlgin='center' width='150'></e-column>
  <e-column field='empstatus' headerText='EmploymentStatus' textAlgin='center' width='150'></e-column>
  <e-column field='techtrain' headerText='Technical training' textAlgin='center' width='150'></e-column>
  <e-column field='year' headerText='Year' textAlgin='center' width='120'></e-column>
  <e-column headerText='Photo' textAlgin='center' width='180'><ng-template #template let-students>
  <img with=50 height=50 src={{students.photourl}}>
  </ng-template> </e-column>
  <e-column headerText='View' [commands]='commands'  width='150'></e-column>
  </e-columns>
  </ejs-grid>`,
 // templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router) { }
  public editSettings:EditSettingsModel[];
  public commands:CommandModel[];
  employees! : EmpenrollformModel[];
  public filterOptions:FilterSettingsModel={
    ignoreAccent:true,
    type:'Excel'
  }
  ngOnInit(): void {
    this.studentService.getEmployee()
    .subscribe((data)=>{
  this.employees= JSON.parse(JSON.stringify(data));
  console.log(this.employees);
  })
  this.commands=[{buttonOption: {content:'View',cssClass:'e-flat'}}]
  }
  commandClick(args:CommandClickEventArgs):void{ 
    let id=JSON.parse(JSON.stringify(args.rowData))._id
  localStorage.setItem('employeedata',id)
   this.router.navigate(['confirmedemployeedata'])
  }
}
