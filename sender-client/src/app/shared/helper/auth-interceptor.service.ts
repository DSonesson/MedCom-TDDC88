import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import { AuthAssistantService} from '../auth-assistant.service';

@Injectable({
    providedIn: 'root'
  })

export class AuthInterceptorService implements HttpInterceptor {

  constructor(public authService: AuthAssistantService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({withCredentials: true });
        return next.handle(authReq);
  }

}
