import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('role')
    localStorage.removeItem('studnewrole')
    localStorage.removeItem('studrole')
    localStorage.removeItem('empnewrole')
    localStorage.removeItem('emprole')
    localStorage.removeItem('notifywait')
    localStorage.removeItem('token')
    localStorage.removeItem('logemail')
    localStorage.removeItem('logeddmail')
    localStorage.removeItem('logedddmail')
    localStorage.removeItem('logemail')
    localStorage.removeItem('tokanval')
    localStorage.removeItem('studentdata')
    localStorage.removeItem('assignedemployee')
    localStorage.removeItem('editcourseId')
    localStorage.removeItem('studentdatacourse')
    localStorage.removeItem('employeedata')
    this.router.navigate(['/'])
  }
    
}
