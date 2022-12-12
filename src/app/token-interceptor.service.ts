import { Injectable,Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  let authservice=this.injector.get(AuthService);
  let tokenizedReq=req.clone({
        setHeaders:{
          Authorization:`Bearer ${authservice.getToken()} `
        }
       })
       return next.handle(tokenizedReq)
     }
 }
 
//  intercept(req, next) {
//    let tokenizedReq=req.clone({
//     setHeaders:{
//       Authorization:'Bearer xx.yy.zz'
//     }
//    })
//    return next.handle(tokenizedReq)
//  }
// }
