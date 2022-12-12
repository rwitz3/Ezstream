import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup
  constructor(private router:Router ,private formBuilder:FormBuilder,private _auth:AuthService) { }
  title:String="Login to your account";
  loginCred={
    email:'',
    password:''
  }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required,Validators.minLength(6)]]  
    })
  }
  loginUser(){
       
      //  if(!this.loginForm.valid){
      //   alert('Please check your inputs!')
      // }else{
        // console.log(JSON.stringify(this.loginForm.value));
        this._auth.loginUser(this.loginCred).subscribe(
          res=>{
            this.router.navigate(['/ez']),
            localStorage.setItem('token',res.token),
            alert(" You've logged in successfully");
        },
          err=>alert('Invalid Login Credentials')
        )
          
      }
  // }
}
