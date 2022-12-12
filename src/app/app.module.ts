import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EzComponent } from './ez/ez.component';
import { HeaderComponent } from './header/header.component';
import { UploadComponent } from './upload/upload.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EzComponent,
    HeaderComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,
              {provide:HTTP_INTERCEPTORS,
                useClass:TokenInterceptorService,
                 multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
