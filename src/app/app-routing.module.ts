import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmdashboardComponent } from './admdashboard/admdashboard.component';
import { AdmemployeeComponent } from './admemployee/admemployee.component';
import { AuthGuard } from './auth.guard';
import { ConfirmedemployeedataComponent } from './confirmedemployeedata/confirmedemployeedata.component';
import { EachcourseComponent } from './eachcourse/eachcourse.component';
import { EmpenrollformComponent } from './empenrollform/empenrollform.component';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { EmpnewroleGuard } from './empnewrole.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { NotificationComponent } from './notification/notification.component';
import { PendingenrollComponent } from './pendingenroll/pendingenroll.component';
import { RoleGuard } from './role.guard';
import { SignupComponent } from './signup/signup.component';
import { StudenrollformComponent } from './studenrollform/studenrollform.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { AdmstudentComponent } from './admstudent/admstudent.component'
import { ConfirmedstudentdataComponent } from './confirmedstudentdata/confirmedstudentdata.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { UpdatestudentdataComponent } from './updatestudentdata/updatestudentdata.component';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { UpdateempprofileComponent } from './updateempprofile/updateempprofile.component';
import { EmpsearchstudentsComponent } from './empsearchstudents/empsearchstudents.component';
import { EmpconfirmedstudentdataComponent } from './empconfirmedstudentdata/empconfirmedstudentdata.component';
import { StudnewroleGuard } from './studnewrole.guard';
import { StudentsGuard } from './students.guard';
import { EmployeesGuard } from './employees.guard';
import { EnrollpendingGuard } from './enrollpending.guard';
import { EmpstudentdataComponent } from './empstudentdata/empstudentdata.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'updatecourse',component:UpdatecourseComponent},
  {path:'editcourse',component:UpdatecourseComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
 // {path:'newcourse',component:NewcourseComponent,canActivate:[AuthGuard,RoleGuard]},
 {path:'pendingenroll',component:PendingenrollComponent,canActivate:[AuthGuard,EnrollpendingGuard]},
 {path:'eachcourse',component:EachcourseComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'empenrollform',component:EmpenrollformComponent,canActivate:[AuthGuard,EmpnewroleGuard]},
  {path:'studenrollform',component:StudenrollformComponent,canActivate:[AuthGuard,StudnewroleGuard]},
  {path:'admdashboard',component:AdmdashboardComponent,canActivate:[AuthGuard,RoleGuard],children:[
  {path:'newcourse',component:NewcourseComponent,outlet:'dash',canActivate:[AuthGuard,RoleGuard]},
  {path:'notification',component:NotificationComponent,outlet:'dash',canActivate:[AuthGuard,RoleGuard]},
  {path:'admemployee',component:AdmemployeeComponent,outlet:'dash',canActivate:[AuthGuard,RoleGuard]},
  {path:'admstudent',component:AdmstudentComponent ,outlet:'dash',canActivate:[AuthGuard,RoleGuard]},
  {path:'searchstudent',component:SearchstudentComponent,outlet:'dash',canActivate:[AuthGuard,RoleGuard]},
  {path:'searchemployee',component:SearchemployeeComponent,outlet:'dash',canActivate:[AuthGuard,RoleGuard]}
]},
{path:'employeedata',component:EmployeedataComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'studentdata',component:StudentdataComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'confirmedemployeedata',component:ConfirmedemployeedataComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'confirmedstudentdata',component:ConfirmedstudentdataComponent,canActivate:[AuthGuard,RoleGuard]},
{path:'studentprofile',component:StudentprofileComponent,canActivate:[AuthGuard,StudentsGuard]},
{path:'updatestudentdata',component:UpdatestudentdataComponent,canActivate:[AuthGuard,StudentsGuard]},
{path:'feepayment',component:FeepaymentComponent,canActivate:[AuthGuard,StudnewroleGuard]},
{path:'employeedashboard',component:EmployeedashboardComponent,canActivate:[AuthGuard,EmployeesGuard],children:
[{path:'employeeprofile',component:EmployeeprofileComponent,outlet:'dasher',canActivate:[AuthGuard,EmployeesGuard]},
{path:'empsearchstudent',component:EmpsearchstudentsComponent,outlet:'dasher',canActivate:[AuthGuard,EmployeesGuard]},
{path:'empstudentdata',component:EmpstudentdataComponent,outlet:'dasher',canActivate:[AuthGuard,EmployeesGuard]}]},
  {path:'updateempprofile',component:UpdateempprofileComponent,canActivate:[AuthGuard,EmployeesGuard]},
  {path:'empconfirmedstudentdata',component:EmpconfirmedstudentdataComponent,canActivate:[AuthGuard,EmployeesGuard]},
];
  //{path:'notification',component:NotificationComponent,canActivate:[AuthGuard,RoleGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
