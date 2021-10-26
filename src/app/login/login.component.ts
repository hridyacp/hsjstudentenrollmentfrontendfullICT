import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:string ="Login"
  error:any
  showPassword :boolean =false;
loginForm
user={email:'',password:''};
  constructor(private fb:FormBuilder, private loginobj:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.minLength(8),Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
     }
     )
  }
  password_show_hide(){
    this.showPassword = !this.showPassword;  
  }
login(){
  this.user.email=this.loginForm.get('email').value
  this.user.password=this.loginForm.get('password').value
    this.loginobj.login(this.user)
    .subscribe(
      (res)=>{
        localStorage.setItem('token',res.token);
        if(res.role=="notifywait"){
          localStorage.setItem('notifywait',res.role);
          this.router.navigate(['/pendingenroll']);
          alert('Login sucessfull');
        }
        else{
        if(res.role=="admin"){
          localStorage.setItem('role',res.role);
        }
        else if(res.role=="newstudent"){
          localStorage.setItem('studnewrole',res.role);
          localStorage.setItem('logemail',this.user.email);
        }
        else if(res.role=="student"){
          localStorage.setItem('studrole',res.role);
          localStorage.setItem('logeddmail',this.user.email);
        }
        else if(res.role=="newemployee"){
          localStorage.setItem('empnewrole',res.role);
          localStorage.setItem('logemail',this.user.email);
        }
        else if(res.role=="employee"){
          localStorage.setItem('emprole',res.role);
          localStorage.setItem('logedddmail',this.user.email);
        }
         this.router.navigate(['/']);
         alert('Login sucessfull');
        }
      }
        ,(err)=>{
          this.error="Email and password dont match. If not a user please sign up"
        }
      )
}
}
