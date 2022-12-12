import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private _auth:AuthService) { }
  title:String='Welcome to Ezstream';
  signupCred={
    name:'',
    email:'',
    mob_number:'',
    password:''
  }
  ngOnInit(): void {
  }
  registerUser(){
    console.log("registerUser",this.signupCred)
    this._auth.userReg(this.signupCred)
    .subscribe(
    (res:any)=> {
    console.log(res)
    localStorage.setItem('token',res.token)
    alert('Signup Success!');
    this.router.navigate(['/login'])
    },
    err=> console.log(err)
    )
  }
}
