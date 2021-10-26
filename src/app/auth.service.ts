import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server_address:string = '/api';
  //server_address:String = 'http://localhost:5200';
  constructor(private http:HttpClient) { }
  login(user:any){
    return this.http.post<any>(`${this.server_address}/login`,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getRole(){
    return !!localStorage.getItem('role')
  }
  getStudnewRole(){
    return !!localStorage.getItem('studnewrole')
  }
  getStudRole(){
    return !!localStorage.getItem('studrole')
  }
  getEmpnewRole(){
    return !!localStorage.getItem('empnewrole')
  }
  getEmpRole(){
    return !!localStorage.getItem('emprole')
  }
  getEnrollpending(){
    return !!localStorage.getItem('notifywait')
  }
}
