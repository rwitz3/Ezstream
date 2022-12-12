import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EzComponent } from './ez/ez.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [{path:"",component:HomeComponent},
                        {path:"login",component:LoginComponent},
                        {path:"signup",component:SignupComponent},
                        {path:"ez",component:EzComponent,canActivate:[AuthGuard]},
                        {path:"upload",component:UploadComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
