import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admdashboard',
  templateUrl: './admdashboard.component.html',
  styleUrls: ['./admdashboard.component.css']
})
export class AdmdashboardComponent implements OnInit {

  constructor(private observer: BreakpointObserver, public _auth:AuthService, private studentService:StudentService) { }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showtitle:Boolean=false
  newpendingnotifItem={
    pending:''
  }
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
this.studentService.getPending()
.subscribe((data)=>{
  this.newpendingnotifItem=JSON.parse(JSON.stringify(data));
  console.log(this.newpendingnotifItem.pending)
})

}
}
