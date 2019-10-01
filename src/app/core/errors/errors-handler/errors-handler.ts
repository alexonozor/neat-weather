import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
    private snackBar: MatSnackBar
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
    // Server error happened
      if (!navigator.onLine) {
        // No Internet connection
       return this.snackBar.open('No Internet Connection');
      }
      // Http Error
      return  this.snackBar.open(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      router.navigate(['error'], { queryParams: {error} });
    }
    // Log the error anyway
    console.error(error);
  }
}
