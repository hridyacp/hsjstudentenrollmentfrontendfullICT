import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-employeedashboard',
  templateUrl: './employeedashboard.component.html',
  styleUrls: ['./employeedashboard.component.css']
})
export class EmployeedashboardComponent implements OnInit {
 
  constructor(private observer: BreakpointObserver, public _auth:AuthService, private studentService:StudentService) { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
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
  }

}
