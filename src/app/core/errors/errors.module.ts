import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsHandler } from './errors-handler/errors-handler';
import { ServerErrorsInterceptor } from './http-error-interceptor/http-error-interceptor';

import { ErrorsComponent } from '../errors/errors-components/errors.components';
import { ErrorRoutingModule } from './errors.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ErrorRoutingModule,
    ],
    declarations: [
        ErrorsComponent
    ],
    providers: [
        {
            provide: ErrorHandler,
            useClass: ErrorsHandler
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ServerErrorsInterceptor,
            multi: true
        },
    ]
})
export class ErrorsModule { }
