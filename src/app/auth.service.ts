import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  userReg(item:any){
    console.log('inside auth.ts');
    return this.http.post<any>("http://localhost:3333/signup",{'user':item})
  }

  loginUser(user:any){
    return this.http.put<any>("http://localhost:3333/login",user)
      // const user=res.find((a:any)=>{
      //   return a.email===this.logIn.value.email && a.password===this.logIn.value.password
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }    
  getToken(){
    return localStorage.getItem('token')
  }
}
