import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  server_address:string = '/api';
 // server_address:String = 'http://localhost:5200';
  constructor(private http:HttpClient) { }
  geteachCourse(id:any){
    //get the id
    return this.http.get(`${this.server_address}/`+id);
    console.log("sucess");
  }
  getCourse(){
    return this.http.get(`${this.server_address}/course`);
      }
      getEmployee(){
        return this.http.get(`${this.server_address}/employee`);
          }
          getStudent(){
            return this.http.get(`${this.server_address}/student`);
          }
          dispEmployee(id:any){
            return this.http.get(`${this.server_address}/dispemployees/`+id);
              }
              dispStudent(id:any){
                return this.http.get(`${this.server_address}/displaystudentcourse/`+id);
              }
              notificationemp(){
                return this.http.get(`${this.server_address}/notificationemployee`);
              }
              notificationstud(){
                return this.http.get(`${this.server_address}/notificationstudent`);
              }
              getnewEmployee(id:any){
                return this.http.get(`${this.server_address}/singlenewemployee/`+id);
                  }
                  getEmployeeprofile(id:any){
                    console.log(id)
                    return this.http.get(`${this.server_address}/singleemployeedet/`+id);
                  }
                  getnewStudent(id:any){
                    console.log(id)
                    return this.http.get(`${this.server_address}/singlenewstudent/`+id);
                      }
                      geteachStudent(id:any){
                        console.log(id)
                        return this.http.get(`${this.server_address}/singlestudentprofile/`+id);
                      }
                    
                      deniedEmployee(id:any){
                        return this.http.delete(`${this.server_address}/removeempden/`+id)
                      }
                      deniedStudent(id:any){
                        return this.http.delete(`${this.server_address}/removestudentden/`+id)
                      }
                      getenrolldata(id:any){
                        return this.http.get(`${this.server_address}/enrollstudata/`+id);
                      }
                      updatefee(studentfee:any){
                        return this.http.put(`${this.server_address}/updatefeedata`,studentfee)
                        .subscribe(data =>{console.log(data)})
                      }
                  confrimnewEmployee(employee:any)
                  {
                    console.log('client update')
                    return this.http.put(`${this.server_address}/confirmnewemployee`,employee)
                    .subscribe(data =>{console.log(data)})
                  }
                  confrimnewStudent(student:any){
                    return this.http.put(`${this.server_address}/confirmnewstudent`,student)
                    .subscribe(data =>{console.log(data)})
                  }
                  getStudentcount(){
                    return this.http.get(`${this.server_address}/studentcounts`);
                  
                  }
                    getEmployeecount(){
                    return this.http.get(`${this.server_address}/employeecountrs`);
                  }
                  getPending(){
                    return this.http.get(`${this.server_address}/pendingenroll`);
                  }
                   dispCourseemp(id:any){
                     return this.http.get(`${this.server_address}/dispcourseemployee/`+id);
                   }
                   dispCourseempprof(id:any){
                    return this.http.get(`${this.server_address}/dispcourseemployeeprofile/`+id);
                   }
  newCourse(item){
    return this.http.post(`${this.server_address}/insertcourse`,{"course":item})
    .subscribe(data=>{console.log(data)})
  }
  signup(item:any){
    return this.http.post(`${this.server_address}/signupnew`,{'signup':item})
    }
    enrollEmp(item){
      return this.http.post(`${this.server_address}/enrollemployee`,{"enrollemp":item})
    }
    enrollStud(item){
      return this.http.post(`${this.server_address}/enrollstudent`,{"studenroll":item})
    }
    editStudent(studentsdata){
      console.log(studentsdata)
      return this.http.put(`${this.server_address}/updatestudents/`,studentsdata) 
    }
    editempprofile(employeedataupd){
      return this.http.put(`${this.server_address}/editempprofiles/`,employeedataupd)
    }
    updateempCourse(employee){
      return this.http.put(`${this.server_address}/updateempcourse/`,employee) 
    }
    deleteempcourse(id:any){
      return this.http.delete(`${this.server_address}/removeempcourse/`+id)
    }
    deleteemp(id:any){
      return this.http.delete(`${this.server_address}/removeemployee/`+id)
    }
    deleteempenroll(id:any){
      return this.http.delete(`${this.server_address}/removeemployeeenroll/`+id)
    }
    deletestudenroll(id:any){
      return this.http.delete(`${this.server_address}/removestudentenroll/`+id)
    }
  editCoursen(course:any){
    return this.http.put(`${this.server_address}/updatecourse/`,course)
    .subscribe(data =>{console.log(data)})
  }
  deleteCourse(id:any){
    return this.http.delete(`${this.server_address}/removecourse/`+id)
  }
  
}
