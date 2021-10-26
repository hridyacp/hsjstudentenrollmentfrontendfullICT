import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//import {MatGridTileHarness} from '@angular/material/grid-list/testing';
import {QuillModule} from 'ngx-quill'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UpdatecourseComponent } from './updatecourse/updatecourse.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEqualValidatorDirective } from './signup/confirm-equal-validator.directive';
import { EachcourseComponent } from './eachcourse/eachcourse.component';
import { EmpenrollformComponent } from './empenrollform/empenrollform.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule,} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { AdmdashboardComponent } from './admdashboard/admdashboard.component';
import { StudentService } from './student.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { NotificationComponent } from './notification/notification.component';
import { MatBadgeModule } from '@angular/material/badge';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { PendingenrollComponent } from './pendingenroll/pendingenroll.component';
import { StudenrollformComponent } from './studenrollform/studenrollform.component';
import { StudentdataComponent } from './studentdata/studentdata.component';
import { AdmemployeeComponent } from './admemployee/admemployee.component';
import { AdmstudentComponent } from './admstudent/admstudent.component';
import { ConfirmedemployeedataComponent } from './confirmedemployeedata/confirmedemployeedata.component';
import { ConfirmedstudentdataComponent } from './confirmedstudentdata/confirmedstudentdata.component';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { GridModule,PagerModule } from '@syncfusion/ej2-angular-grids';
import { FilterService, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { UpdatestudentdataComponent } from './updatestudentdata/updatestudentdata.component';
import { FeepaymentComponent } from './feepayment/feepayment.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { UpdateempprofileComponent } from './updateempprofile/updateempprofile.component';
import { EmpsearchstudentsComponent } from './empsearchstudents/empsearchstudents.component';
import { EmpconfirmedstudentdataComponent } from './empconfirmedstudentdata/empconfirmedstudentdata.component';
import { EmpstudentdataComponent } from './empstudentdata/empstudentdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UpdatecourseComponent,
    NewcourseComponent,
    LoginComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective,
    EachcourseComponent,
    EmpenrollformComponent,
    AdmdashboardComponent,
    NotificationComponent,
    EmployeedataComponent,
    PendingenrollComponent,
    StudenrollformComponent,
    StudentdataComponent,
    AdmemployeeComponent,
    AdmstudentComponent,
    ConfirmedemployeedataComponent,
    ConfirmedstudentdataComponent,
    SearchstudentComponent,
    SearchemployeeComponent,
    StudentprofileComponent,
    UpdatestudentdataComponent,
    FeepaymentComponent,
    EmployeedashboardComponent,
    EmployeeprofileComponent,
    UpdateempprofileComponent,
    EmpsearchstudentsComponent,
    EmpconfirmedstudentdataComponent,
    EmpstudentdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    QuillModule,
    ReactiveFormsModule,
    MatInputModule,
  MatFormFieldModule,
  FormsModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatDividerModule,
  MatBadgeModule,
  GridModule,
    PagerModule
  ],
  providers: [StudentService,AuthService,{
    provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
multi:true}, FilterService,CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
