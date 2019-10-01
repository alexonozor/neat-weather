import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { delay, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {
    constructor(
        private router: Router,
    ) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request);
    }
}
